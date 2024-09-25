declare module 'unrar-promise' {
  export function extract(
    rarFilePath: string,
    outputDir: string
  ): Promise<void>;
}
