import {Pattern} from './Pattern';

export interface Specifiable<T, U> extends Pattern<T> {
  isSpecifiable() : boolean;
  isSpecified() : boolean;
  choices() : U | U[];
  setSpeciality(value : U) : boolean;
  clone() : T;
}
