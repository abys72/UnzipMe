interface ExtractedFile {
    name: string;
    blob: Blob;
  }

  interface TarLocalFile {
    name: string;
    buffer: Uint8Array;
  }