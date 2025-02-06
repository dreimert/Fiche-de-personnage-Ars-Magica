import {Art} from './Art';
import {Competence} from './Competence';
import {Named} from './Named';
import {Caracteristique} from './Caracteristique';
import {Specifiable, Choices} from './Specifiable';
import {Specificite} from './Specificite';
import {NatureType, NatureCategory, NatureValeur} from './Enum';
import {Jsonable, registerJsonable} from './Jsonable';

import { natures } from '../datas/natures';

let liste: Nature[] = [];
const dictionnaire: {[key: string]: Nature} = {};

export class Nature implements Named, Specifiable<Nature, Nature | Art | Competence | Caracteristique>, Jsonable {
  public static readonly liste = liste;
  public static readonly enum = dictionnaire;

  private _typeSpeciality: Specificite;
  constructor(
    public readonly type: NatureType | null = null,
    public readonly category: NatureCategory | null = null,
    public readonly valeur: NatureValeur | null = null,
    public readonly name: string | null = null,
    public readonly speciality: Named | string | null = null
  ){
    this._typeSpeciality = new Specificite(name!, speciality!); // TODO: i have use hack !
  }

  isPattern () {
    return this.type === null || this.category === null || this.valeur === null || !this._typeSpeciality.isSpecified();
  }

  include (other: Nature){
    if(this.type !== null && this.type !== other.type) {
      return false;
    }
    if(this.category !== null && this.category !== other.category) {
      return false;
    }
    if(this.valeur !== null && this.valeur !== other.valeur) {
      return false;
    }
    if(this.name !== null && this.name !== other.name) {
      return false;
    }
    if(this._typeSpeciality.isSpecifiable() && this._typeSpeciality.isSpecified() && this._typeSpeciality.name !== other._typeSpeciality.name){
      return false;
    }
    return true;
  }

  exclude (other: Nature){
    return !this.include(other);
  }

  isSpecifiable () {
    return this.isPattern();
  }

  isSpecified () {
    return !this.isSpecifiable();
  }

  choices () {
    // if(this.type !== null && this.category !== null && this.valeur === null && this.name !== null) {
    //   return new Choices<Nature | Art | Competence | Caracteristique>([NatureValeur.Majeure, NatureValeur.Mineure]);
    // } else
    if(this.type === null || this.category === null || this.valeur === null || this.name === null) {
      return new Choices<Nature | Art | Competence | Caracteristique>(Nature.liste.filter(this.include, this));
    } else {
      switch (this._typeSpeciality.type) {
          case "art": return new Choices<Nature | Art | Competence | Caracteristique>(Art.liste);
          case "competence": return new Choices<Nature | Art | Competence | Caracteristique>(Competence.liste);
          case "caracteristique": return new Choices<Nature | Art | Competence | Caracteristique>(Caracteristique.liste);
          default: return new Choices<Nature | Art | Competence | Caracteristique>();
      };
    }
  }

  specify (value: Art | Competence | string) {
    if(value instanceof Nature) {
      return value;
    // } else if(this.type !== null && this.category !== null && this.valeur === null && this.name !== null) {
    //   return new Nature(this.type, this.category, value, this.name, this.speciality);
    } else {
      return new Nature(this.type, this.category, this.valeur, this.name, value);
    }
  }

  toString () {
    return this._typeSpeciality.toString();//`${name} : ${NatureType[this.type]}, ${NatureCategory[this.category]}, ${NatureValeur[this.valeur]}`;
  }

  toJSON () {
    return {
      fromJSON: "Nature",
      type: this.type,
      category: this.category,
      valeur: this.valeur,
      name: this.name,
      speciality: this.speciality
    }
  }

  public static fromJSON (source: any) {
    return new Nature(source.type, source.category, source.valeur, source.name, source.speciality);
  }
}

registerJsonable("Nature", Nature);

for(let ntype in natures) {
  for(let ncat in natures[ntype as NatureType]) {
    for(let nval in natures[ntype as NatureType]![ncat as NatureCategory]) {
      if(nval === "majeurOuMineur") {
        for(let name of natures[ntype as NatureType]![ncat as NatureCategory]![nval]!) {
          liste.push(new Nature(
            ntype as NatureType,
            ncat as NatureCategory,
            NatureValeur.Majeure,
            `${name} majeur`,
          ));
          liste.push(new Nature(
            ntype as NatureType,
            ncat as NatureCategory,
            NatureValeur.Mineure,
            `${name} mineur`,
          ));
        }
      } else {
        for(let name of natures[ntype as NatureType]![ncat as NatureCategory]![nval as unknown as NatureValeur]!) {
          liste.push(new Nature(
            ntype as NatureType,
            ncat as NatureCategory,
            +nval,
            name,
          ));
        }
      }
    }
  }
}

liste.sort((a, b) => {
  return a.name!.localeCompare(b?.name!);
});


liste.forEach(function(nature){
  dictionnaire[nature.name!] = nature;
});
