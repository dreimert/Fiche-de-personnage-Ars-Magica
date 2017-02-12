import {Pattern} from './Pattern';

export class Choices<U> {
  constructor(readonly liste: U[] = null) {}

  isFree() : boolean {
    return this.liste === null;
  }
}

export interface Specifiable<T, U> extends Pattern<T> {
  isSpecifiable() : boolean;
  isSpecified() : boolean;
  choices() : Choices<U>;
  specify(value : U | string) : T;
}
