import { Component } from '@angular/core';
import JSZip from 'jszip';
import pako from 'pako';
import { Untar } from 'tar-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title: string = '';
  description: string = '';
  filePrompt: string = '';
  buttonText: string = '';
  selectedFiles: string = '';
  outputMessage: string = '';
  progressValue: number = 0;
  progressVisible: boolean = false;
  password: string = '';
  fileList: { name: string; url: string }[] = [];
  extractedFiles: { name: string; blob: Blob }[] = [];
  texts = {
    fileSelected: 'Selected files:',
    allFilesExtracted: 'All files extracted.'
  };
  constructor() {
    this.setLanguage(); // Set initial language
  }

  setLanguage(): void {
    const translations = {
      es: {
        title: 'UnzipMe',
        description: 'Descomprime múltiples archivos al instante y descárgalos fácilmente en cualquier formato.',
        filePrompt: 'Selecciona tus archivos comprimidos (ZIP, GZ, RAR, TAR, TAR.GZ, XZ).',
        buttonText: 'Descomprimir y descargar',
        fileSelected: 'Archivos seleccionados:',
        allFilesExtracted: 'Todos los archivos descomprimidos.'
      },
      en: {
        title: 'UnzipMe',
        description: 'Extract multiple files instantly and easily download them in any format.',
        filePrompt: 'Select your compressed files (ZIP, GZ, RAR, TAR, TAR.GZ, XZ).',
        buttonText: 'Extract and download',
        fileSelected: 'Selected files:',
        allFilesExtracted: 'All files extracted.'
      }
    };

    const userLang = navigator.language.startsWith('es') ? 'es' : 'en';
    const texts = translations[userLang];

    this.title = texts.title;
    this.description = texts.description;
    this.filePrompt = texts.filePrompt;
    this.buttonText = texts.buttonText;
  }

  showSelectedFiles(): void {
    const fileInput = (document.getElementById('fileInput') as HTMLInputElement).files;
    const selectedFilesDisplay = document.getElementById('selectedFiles');
    
    if (fileInput && fileInput.length > 0 && selectedFilesDisplay) {
      selectedFilesDisplay.textContent = this.texts.fileSelected + ' ' + Array.from(fileInput).map(f => f.name).join(', ');
    } else if (selectedFilesDisplay) {
      selectedFilesDisplay.textContent = '';
    }
  }

  unzipFiles(): void {
    const fileInput = (document.getElementById('fileInput') as HTMLInputElement).files;
    const outputMessage = document.getElementById('outputMessage');
    const maxSize = 50 * 1024 * 1024; // 50MB max size
    const fileList = document.getElementById('fileList');
    console.log('File input:', fileInput);
    console.log('Output message element:', outputMessage);
    console.log('File list element:', fileList);
    if (fileList) fileList.innerHTML = '';
    this.extractedFiles = [];  // Reset extracted files
    let processedFiles = 0;

    if (!fileInput || fileInput.length === 0) {
      if (outputMessage) {
        outputMessage.textContent = 'No files selected.';
      }
      return;
    }

    Array.from(fileInput).forEach(file => {
      if (file.size > maxSize) {
        if (outputMessage) {
          outputMessage.textContent = 'File size exceeds maximum allowed (50MB).';
        }
        return;
      }

      const reader = new FileReader();
      reader.onprogress = (e: ProgressEvent<FileReader>) => {
        if (e.lengthComputable) {
          const percentComplete = (e.loaded / e.total) * 100;
          this.updateProgress(percentComplete);
        }
      };

      reader.onload = (e: ProgressEvent<FileReader>) => {
        const fileData = e.target?.result as ArrayBuffer;
        const fileName = file.name;

        if (!fileData) {
          return;
        }
      
        if (fileName.endsWith('.zip')) {
          const zip = new JSZip();
          zip.loadAsync(fileData).then(zipContent => {
            zipContent.forEach((relativePath, file) => {
              file.async('blob').then(content => {
                this.addDownloadLink(content, relativePath);
                this.extractedFiles.push({ name: relativePath, blob: content });
              });
            });
            processedFiles++;
            this.checkCompletion(fileInput.length, processedFiles);
          }).catch(() => {
            const outputMessage = document.getElementById('outputMessage');
            if (outputMessage) {
              outputMessage.textContent = 'Error: incorrect password or invalid ZIP file.';
            }
          });
        } 
        // Handle GZ files
        else if (fileName.endsWith('.gz')) {
          try {
            const decompressed = pako.ungzip(fileData);
            const blob = new Blob([decompressed], { type: 'application/octet-stream' });
            const newFileName = fileName.replace('.gz', '');
            this.addDownloadLink(blob, newFileName);
            processedFiles++;
            this.checkCompletion(fileInput.length, processedFiles);
          } catch (error) {
            const outputMessage = document.getElementById('outputMessage');
            if (outputMessage) {
              outputMessage.textContent = 'Error decompressing GZ file.';
            }
          }
        }
        // Handle TAR files
        else if (fileName.endsWith('.tar')) {
          try {
            const untar = new Untar();  // No arguments in the constructor

            const files = untar.extract(new Uint8Array(fileData)); // Extracts files from TAR

            files.forEach(file => {
              const blob = new Blob([file.buffer], { type: 'application/octet-stream' });
              this.addDownloadLink(blob, file.name);
              this.extractedFiles.push({ name: file.name, blob });
            });
          } catch (error) {
            console.error('Error extracting TAR file:', error);
            const outputMessage = document.getElementById('outputMessage');
            if (outputMessage) {
              outputMessage.textContent = 'Error extracting TAR file.';
            }
          }
        }
        // Handle TAR.GZ files
        else if (fileName.endsWith('.tar.gz') || fileName.endsWith('.tgz')) {
          try {
            const decompressed = pako.ungzip(fileData);
            const untar = new Untar();
            const files = untar.extract(new Uint8Array(decompressed));
            files.forEach(file => {
              const blob = new Blob([file.buffer], { type: 'application/octet-stream' });
              this.addDownloadLink(blob, file.name);
            });
            processedFiles++;
            this.checkCompletion(fileInput.length, processedFiles);
          } catch (error) {
            const outputMessage = document.getElementById('outputMessage');
            if (outputMessage) {
              outputMessage.textContent = 'Error extracting TAR.GZ file.';
            }
          }
        }
        else {
          const outputMessage = document.getElementById('outputMessage');
          if (outputMessage) {
            outputMessage.textContent = 'Unsupported file format.';
          }
        }
      };

      reader.readAsArrayBuffer(file);
    });
  }
  checkCompletion(totalFiles: number, processedFiles: number): void {
    const progressBar = document.getElementById('progressBar')
    const outputMessage = document.getElementById('outputMessage');
    if (processedFiles === totalFiles) {
      if (progressBar) {
        progressBar.style.display = 'none';
      }
      if (outputMessage){
        outputMessage.textContent = this.texts.allFilesExtracted;
      }
    }
  }

  addDownloadLink(blob: Blob, fileName: string): void {
    const fileList = document.getElementById('fileList');
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    a.textContent = 'Download ' + fileName;
    li.appendChild(a);
    if (fileList) fileList.appendChild(li);
  }

  updateProgress(percent: number): void {
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
      progressBar.style.width = `${percent}%`;
      progressBar.textContent = `${percent}% Complete`;
    }
  }

  downloadAllFiles(): void {
    const zip = new JSZip();
    this.extractedFiles.forEach(file => {
      zip.file(file.name, file.blob);
    });
    zip.generateAsync({ type: 'blob' }).then(content => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(content);
      a.download = 'archivos.zip';
      a.click();
    });
  }
}
