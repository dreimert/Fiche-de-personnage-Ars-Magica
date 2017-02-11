import {Xpliable} from './Xpliable';
import {Named} from './Named';

export enum CompetenceType {
  Générale,
  Académique,
  Mystique,
  Martiale,
  Surnaturelle,
  Sort
}

export class Competence extends Xpliable implements Named {
  constructor(public name: string, public type: CompetenceType) {
    super(5);
  }

  toString() {
    return this.name;
  }
}
