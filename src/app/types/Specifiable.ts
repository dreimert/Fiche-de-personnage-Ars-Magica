export interface Specifiable<T> {
  isSpecifiable() : boolean;
  choices() : any;
  setSpeciality(value : T) : boolean;
}
