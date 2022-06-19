/* eslint-disable @typescript-eslint/no-empty-interface */
declare module "parallax-js" {
  export interface IParallax {}
  export class Parallax {
    constructor(scene: any, options?: object): IParallax;
  }
}
