import {Pattern} from './Pattern';

export class Choices<U> {
  constructor(readonly liste?: U[], readonly multi = false) {}

  isFree() : boolean {
    return this.liste === undefined;
  }
}

export interface Specifiable<T, U> extends Pattern<T> {
  isSpecifiable() : boolean;
  isSpecified() : boolean;
  choices() : Choices<U>;
  specify(value : U | string) : T;
}
