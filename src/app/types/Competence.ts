import {Xpliable} from './Xpliable';
import {Named} from './Named';
import {Specifiable} from './Specifiable';
import {Specificite} from './Specificite';

export enum CompetenceType {
  Générale,
  Académique,
  Mystique,
  Martiale,
  Surnaturelle,
  Sort
}

export class Competence extends Xpliable implements Named, Specifiable<any, any> {
  private _typeSpeciality: Specificite;
  constructor(public name: string, public type: CompetenceType) {
    super(5);

    this._typeSpeciality = new Specificite(name);
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
    return this._typeSpeciality.isSpecifiable();
  }

  isSpecified() {
    return this._typeSpeciality.isSpecified();
  }

  choices(): any {
    return this._typeSpeciality.choices();
  }

  setSpeciality(value) {
    return this._typeSpeciality.setSpeciality(value);
  }

  clone() {
    return new Competence(this.name, this.type);
  }

  toString() {
    return this._typeSpeciality.toString();
  }
}
