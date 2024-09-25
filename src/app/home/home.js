document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        'es': {
            title: 'UnzipMe',
            description: 'Descomprime múltiples archivos al instante y descárgalos fácilmente en cualquier formato.',
            filePrompt: 'Selecciona tus archivos comprimidos (ZIP, GZ, RAR, TAR, TAR.GZ).',
            fileLabel: 'Sube tus archivos comprimidos aquí',
            buttonText: 'Descomprimir y descargar',
            maxSizeError: 'El archivo supera el límite de tamaño (50MB).',
            noFilesSelected: 'Por favor, selecciona archivos comprimidos.',
            fileSelected: 'Archivos seleccionados:',
            allFilesExtracted: 'Todos los archivos descomprimidos.',
            privacyPolicy: `
                <h1>Política de Privacidad</h1>
                <p>
                    Toda la información se procesa en su navegador. ¡Tus archivos o datos no se suben a ningún sitio! Tu privacidad es muy importante para nosotros. En consecuencia, hemos desarrollado esta política para que comprendas cómo recopilamos, usamos, comunicamos, divulgamos y utilizamos la información personal. A continuación, se describe nuestra política de privacidad.
                </p>
                <ul>
                    <li>Antes o en el momento de recopilar información personal, identificaremos los fines para los cuales se recopila la información.</li>
                    <li>Recopilaremos y utilizaremos la información personal únicamente con el objetivo de cumplir con los fines especificados por nosotros y para otros fines compatibles, a menos que obtengamos el consentimiento del individuo o según lo exija la ley.</li>
                    <li>Solo retendremos la información personal el tiempo que sea necesario para el cumplimiento de esos fines.</li>
                    <li>Recopilaremos información personal por medios legales y justos y, cuando sea apropiado, con el conocimiento o consentimiento del individuo.</li>
                    <li>Los datos personales deben ser relevantes para los fines para los cuales se van a utilizar y, en la medida necesaria para esos fines, deben ser precisos, completos y actualizados.</li>
                    <li>Protegeremos la información personal mediante medidas de seguridad razonables contra la pérdida o el robo, así como el acceso, la divulgación, la copia, el uso o la modificación no autorizados.</li>
                    <li>Pondremos a disposición de los clientes información sobre nuestras políticas y prácticas relacionadas con la gestión de la información personal.</li>
                </ul>

                <h2>Direcciones IP y cookies</h2>
                <p>
                    Podemos recopilar información sobre tu computadora, incluida tu dirección IP, sistema operativo y tipo de navegador, para la administración del sistema y para crear informes. Estos son datos estadísticos sobre las acciones y patrones de navegación de nuestros usuarios, y no identifican a ningún individuo. Actualmente usamos Yandex Metrica para fines de análisis.
                </p>

                <h2>Tus derechos</h2>
                <p>
                    Tienes el derecho de solicitarnos que no procesemos tus datos personales para fines de marketing. Normalmente, te informaremos (antes de recopilar tus datos) si tenemos la intención de utilizar tus datos para tales fines o si tenemos la intención de divulgar tu información a terceros para dichos fines. Puedes ejercer tu derecho a evitar dicho procesamiento marcando ciertas casillas en los formularios que utilizamos para recopilar tus datos. Nuestro sitio puede, de vez en cuando, contener enlaces a y desde los sitios web de nuestras redes de socios, anunciantes y afiliados. Si sigues un enlace a cualquiera de estos sitios web, ten en cuenta que estos sitios web tienen sus propias políticas de privacidad y que no aceptamos ninguna responsabilidad u obligación por estas políticas. Verifica estas políticas antes de enviar cualquier dato personal a estos sitios web.
                </p>
            `
        },
        'en': {
            title: 'UnzipMe',
            description: 'Extract multiple files instantly and easily download them in any format.',
            filePrompt: 'Select your compressed files (ZIP, GZ, RAR, TAR, TAR.GZ).',
            fileLabel: 'Upload your compressed files here',
            buttonText: 'Extract and download',
            maxSizeError: 'The file exceeds the size limit (50MB).',
            noFilesSelected: 'Please select compressed files.',
            fileSelected: 'Selected files:',
            allFilesExtracted: 'All files extracted.',
            privacyPolicy: `
                <h1>Privacy Policy</h1>
                <p>
                    All processing is done in your browser. Your files or data is not uploaded anywhere! Your privacy is very important to us. Accordingly, we have developed this policy in order for you to understand how we collect, use, communicate and disclose and make use of personal information. The following outlines our privacy policy.
                </p>
                <ul>
                    <li>Before or at the time of collecting personal information, we will identify the purposes for which information is being collected.</li>
                    <li>We will collect and use personal information solely with the objective of fulfilling those purposes specified by us and for other compatible purposes, unless we obtain the consent of the individual concerned or as required by law.</li>
                    <li>We will only retain personal information as long as necessary for the fulfillment of those purposes.</li>
                    <li>We will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</li>
                    <li>Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.</li>
                    <li>We will protect personal information by reasonable security safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or modification.</li>
                    <li>We will make readily available to customers information about our policies and practices relating to the management of personal information.</li>
                </ul>

                <h2>IP addresses and cookies</h2>
                <p>
                    We may collect information about your computer, including where available your IP address, operating system and browser type, for system administration and in order to create reports. This is statistical data about our users’ browsing actions and patterns, and does not identify any individual. We currently use Yandex Metrica for Analytics purposes.
                </p>

                <h2>Your rights</h2>
                <p>
                    You have the right to ask us not to process your personal data for marketing purposes. We will usually inform you (before collecting your data) if we intend to use your data for such purposes or if we intend to disclose your information to any third party for such purposes. You can exercise your right to prevent such processing by checking certain boxes on the forms we use to collect your data. Our site may, from time to time, contain links to and from the websites of our partner networks, advertisers, and affiliates. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any personal data to these websites.
                </p>
            `
        }
    };
    const userLang = navigator.language || navigator.userLanguage;
    const lang = userLang.startsWith('es') ? 'es' : 'en';
    const texts = translations[lang];

    const titleElement = document.getElementById('title');
    if (titleElement) {
        titleElement.textContent = texts.title;
        document.getElementById('description').textContent = texts.description;
        document.getElementById('filePrompt').textContent = texts.filePrompt;
        document.querySelector('.upload-section button').textContent = texts.buttonText;
    }

    // Set content for the privacy page
    const privacyElement = document.getElementById('privacy-policy');
    if (privacyElement) {
        privacyElement.innerHTML = texts.privacyPolicy;
    }
});


let extractedFiles = [];

function updateProgress(percent) {
    const progressBar = document.getElementById('progressBar');
    progressBar.style.display = 'block';
    progressBar.value = percent;
}

function showSelectedFiles() {
    const fileInput = document.getElementById('fileInput').files;
    const selectedFilesDisplay = document.getElementById('selectedFiles');
    if (fileInput.length > 0) {
        selectedFilesDisplay.textContent = texts.fileSelected + ' ' + Array.from(fileInput).map(f => f.name).join(', ');
    } else {
        selectedFilesDisplay.textContent = '';
    }
}

function unzipFiles() {
    const fileInput = document.getElementById('fileInput').files;
    const password = document.getElementById('passwordInput').value;
    const maxSize = 50 * 1024 * 1024; // 50MB max size
    const fileList = document.getElementById('fileList');
    fileList.innerHTML = '';
    extractedFiles = [];  // Reset extracted files
    let processedFiles = 0;

    if (!fileInput.length) {
        document.getElementById('outputMessage').textContent = 'No files selected.';
        return;
    }

    for (let i = 0; i < fileInput.length; i++) {
        const file = fileInput[i];
        if (file.size > maxSize) {
            document.getElementById('outputMessage').textContent = 'File size exceeds maximum allowed (50MB).';
            return;
        }

        const reader = new FileReader();
        reader.onprogress = function (e) {
            if (e.lengthComputable) {
                const percentComplete = (e.loaded / e.total) * 100;
                updateProgress(percentComplete);
            }
        };

        reader.onload = function (e) {
            const fileData = e.target.result;
            const fileName = file.name;

            if (fileName.endsWith('.zip')) {
                const zip = new JSZip();
                zip.loadAsync(fileData, { password: password }).then(function (zipContent) {
                    zipContent.forEach(function (relativePath, file) {
                        file.async('blob').then(function (content) {
                            addDownloadLink(content, relativePath);
                            extractedFiles.push({ name: relativePath, blob: content });
                        });
                    });
                    processedFiles++;
                    checkCompletion(fileInput.length, processedFiles);
                }).catch(function () {
                    document.getElementById('outputMessage').textContent = 'Error: incorrect password or invalid ZIP file.';
                });

            } else if (fileName.endsWith('.gz')) {
                try {
                    const uint8Array = new Uint8Array(fileData); // Convert file to Uint8Array
                    const decompressedData = pako.inflate(uint8Array); // Decompress the .gz/.gzip file
            
                    // Create a valid filename by removing the .gz/.gzip extension
                    let newFileName = fileName.replace('.gz', '');
            
                    // Create a Blob with the decompressed data and trigger a download
                    addDownloadLink(new Blob([decompressedData]), newFileName);
            
                    processedFiles++;
                    checkCompletion(fileInput.length, processedFiles);
                } catch (e) {
                    console.error(e); // Log the error for debugging
                    document.getElementById('outputMessage').textContent = 'Error decompressing .gz/.gzip file.';
                }

            } else if (fileName.endsWith('.rar')) {
                const rarExtractor = new Unrar(fileData);
                rarExtractor.extract().then(function (extractedFiles) {
                    extractedFiles.forEach(function (file) {
                        addDownloadLink(new Blob([file.fileData]), file.fileName);
                    });
                    processedFiles++;
                    checkCompletion(fileInput.length, processedFiles);
                }).catch(function () {
                    document.getElementById('outputMessage').textContent = 'Error extracting RAR file.';
                });

            } else if (fileName.endsWith('.tar')) {
                tar.extract(new Uint8Array(fileData)).then(function (files) {
                    files.forEach(function (file) {
                        addDownloadLink(new Blob([file.buffer]), file.name);
                    });
                    processedFiles++;
                    checkCompletion(fileInput.length, processedFiles);
                }).catch(function () {
                    document.getElementById('outputMessage').textContent = 'Error extracting TAR file.';
                });

            } else if (fileName.endsWith('.tar.gz') || fileName.endsWith('.tgz')) {
                const decompressedData = pako.ungzip(fileData);
                tar.extract(new Uint8Array(decompressedData)).then(function (files) {
                    files.forEach(function (file) {
                        addDownloadLink(new Blob([file.buffer]), file.name);
                    });
                    processedFiles++;
                    checkCompletion(fileInput.length, processedFiles);
                }).catch(function () {
                    document.getElementById('outputMessage').textContent = 'Error extracting TAR.GZ file.';
                });

            } else {
                document.getElementById('outputMessage').textContent = 'Unsupported file format.';
            }
        };

        reader.readAsArrayBuffer(file);
    }
}

function checkCompletion(totalFiles, processedFiles) {
    if (processedFiles === totalFiles) {
        document.getElementById('progressBar').style.display = 'none';
        document.getElementById('outputMessage').textContent = texts.allFilesExtracted;
    }
}

function addDownloadLink(blob, fileName) {
    const fileList = document.getElementById('fileList');
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    a.textContent = 'Download ' + fileName;
    li.appendChild(a);
    fileList.appendChild(li);
}

function downloadAllFiles() {
    const zip = new JSZip();
    extractedFiles.forEach(file => {
        zip.file(file.name, file.blob);
    });

    zip.generateAsync({ type: 'blob' }).then(function (content) {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(content);
        a.download = 'archivos.zip';
        a.click();
    });
}
