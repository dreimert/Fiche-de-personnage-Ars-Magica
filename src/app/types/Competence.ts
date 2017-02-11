import {Xpliable} from './Xpliable';
import {Named} from './Named';
import {Selectable} from './Selectable';

export enum CompetenceType {
  Générale,
  Académique,
  Mystique,
  Martiale,
  Surnaturelle,
  Sort
}

export class Competence extends Xpliable implements Named, Selectable<any, any> {
  constructor(public name: string, public type: CompetenceType) {
    super(5);
  }

  isPattern() : boolean {
    return false;
  }

  include(other: Competence) : boolean {
    if(this.name !== null && this.name !== other.name) {
      return false;
    }
    if(this.type !== null && this.type !== other.type) {
      return false;
    }
    return true;
  }

  exclude(other: Competence) : boolean {
    return !this.include(other);
  }

  isSpecifiable() {
    return false;
  }

  isSpecified() {
    return true;
  }

  choices() : any {
    return false;
  }

  setSpeciality(value) {
    return false;
  }

  clone() {
    return new Competence(this.name, this.type);
  }

  toString() {
    return this.name;
  }
}
