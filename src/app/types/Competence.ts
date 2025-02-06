import {Xpliable, XpliableImplemantation, ConvertToXpliable, XpliableLabel} from './Xpliable';
import {Named} from './Named';
import {Specifiable, Choices} from './Specifiable';
import {Specificite} from './Specificite';
import {CompetenceType} from './Enum';
import {Jsonable, registerJsonable} from './Jsonable';

import {competences} from '../datas/competences';

let liste: Competence[] = [];
let dictionnaire: {[key: string]: Competence} = {};

export class Competence implements Named, ConvertToXpliable, Specifiable<Competence, Competence>, Jsonable {
  public static readonly liste  = liste;
  public static readonly enum = dictionnaire;

  private _typeSpeciality: Specificite;

  constructor(readonly type: CompetenceType, readonly name: string | null = null, readonly speciality: string | null = null) {
    this._typeSpeciality = new Specificite(name, speciality);
  }

  isPattern() : boolean {
    return this.type === null || !this._typeSpeciality.isSpecified();
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
    return this.isPattern();
  }

  isSpecified() {
    return !this.isSpecifiable();
  }

  choices() {
    if(this.type === null) {
      return new Choices<Competence>(Competence.liste);
    } else if(this.name === null) {
      return new Choices<Competence>(Competence.liste.filter(this.include, this));
    } else {
      return new Choices<Competence>();
    }
  }

  specify (value: string | Competence) {
    if(typeof value === "string") {
      return new Competence(this.type, this.name, value);
    } else {
      return value;
    }
  }

  convertToXpliable () {
    return new CompetenceXpliable(this);
  }

  toString () {
    return this._typeSpeciality?.toString() || "Oups";
  }

  toJSON(): any {
    return {
      fromJSON: "Competence",
      name: this.name,
      type: this.type,
      speciality: this.speciality
    };
  }

  public static fromJSON(source: any) {
    return new Competence(
      source.type,
      source.name,
      source.speciality
    );
  }
}

registerJsonable("Competence", Competence);

export class CompetenceXpliable extends Competence implements Xpliable {
  private _xp : XpliableImplemantation;
  constructor(public readonly competence: Competence, labels: XpliableLabel[] = []) {
    super(competence.type, competence.name, competence.speciality);
    this._xp = new XpliableImplemantation(5, labels);
  }

  getLabel (name: string) {
    return this._xp.getLabel(name);
  }

  setLabel (name: string, xp : number) : this {
    this._xp.setLabel(name, xp);
    return this;
  }

  removeLabel (name: string) : boolean {
    return this._xp.removeLabel(name);
  }

  get xp (): number {
    return this._xp.xp;
  }

  get lvl () : number {
    return this._xp.lvl;
  }

  get labels () {
    return this._xp.labels;
  }

  override toJSON () {
    return {
      fromJSON: "CompetenceXpliable",
      competence: this.competence,
      labels: this._xp.labels
    };
  }

  public static override fromJSON (source: any) {
    return new CompetenceXpliable(
      source.competence,
      source.labels
    );
  }
}

registerJsonable("CompetenceXpliable", CompetenceXpliable);

for(let ctype in competences) {
  for(let name of competences[ctype as CompetenceType]!) {
    liste.push(new Competence(
      ctype as CompetenceType,
      name
    ));
  }
}

liste.forEach(function(competence){
  dictionnaire[competence.name!] = competence;
});
