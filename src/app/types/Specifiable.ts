export interface Specifiable<T> {
  isSpecifiable() : boolean;
  isSpecified() : boolean;
  choices() : any;
  setSpeciality(value : T) : boolean;
  clone() : T;
}
