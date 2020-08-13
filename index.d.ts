declare interface options {
 elapsedChar?: string;
 progressChar?: string;
 emptyChar: string;
}
declare class Functions {
  constructor(){
  this.version: string;
  }
 toProperCase(string: string, lowerCaseBoolean: boolean): string;
 toChunks(string: string, chunkBy: number): string[];
 scramble(string: string): string;
 mock(string :string): string;
 emojify(string: string): string;
 hasCustomEmoji(string: string): number | string;
 createProgressBar(inTotal: number, Total: number, options?: options): string;
 toAbbreviation(string: string): string;
}
export = Functions;
