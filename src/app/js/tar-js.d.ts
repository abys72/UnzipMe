declare module 'tar-js' {
    export class Untar {
      extract(data: Uint8Array): { name: string; buffer: Uint8Array }[];
    }
  }
  