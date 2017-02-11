import {Xpliable} from './Xpliable';
import {Named} from './Named';
import {Pattern} from './Pattern';
import {Specifiable} from './Specifiable';

export enum CompetenceType {
  Générale,
  Académique,
  Mystique,
  Martiale,
  Surnaturelle,
  Sort
}

export class Competence extends Xpliable implements Named, Pattern<Competence>, Specifiable<string> {
  constructor(public name: string, public type: CompetenceType) {
    super(5);
  }

  isPattern() : boolean {
    return false;
  }

  include(other: Competence) : boolean {
    return this.type === other.type;
  }

  exclude(other: Competence) : boolean {
    return !this.include(other);
  }

  isSpecifiable() {
    return false;
  }

  choices() : any {
    return false;
  }

  setSpeciality(value) {
    return false;
  }

  toString() {
    return this.name;
  }
}
