import {Xpliable, XpliableImplemantation, ConvertToXpliable} from './Xpliable';
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

export class Competence implements Named, ConvertToXpliable, Specifiable<any, any> {
  private _typeSpeciality: Specificite;
  constructor(readonly name: string, readonly type: CompetenceType) {
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

  convertToXpliable() {
    return new CompetenceXpliable(this);
  }

  clone() {
    return new Competence(this.name, this.type);
  }

  toString() {
    return this._typeSpeciality.toString();
  }
}

export class CompetenceXpliable extends Competence implements Xpliable {
  private _xp : XpliableImplemantation;
  constructor(public readonly competence: Competence, xp: number = 0) {
    super(competence.name, competence.type);
    this._xp = new XpliableImplemantation(1, xp);
  }

  set xp(xp: number) {
    this._xp.xp = xp;
  };

  get xp(): number {
    return this._xp.xp;
  }

  get lvl() : number {
    return this._xp.lvl;
  }
}
