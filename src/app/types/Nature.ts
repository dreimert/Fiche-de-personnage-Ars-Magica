import {Art} from './Art';
import {Competence} from './Competence';
import {Named} from './Named';
import {Caracteristique} from './Caracteristique';
import {Specifiable, Choices} from './Specifiable';
import {Specificite} from './Specificite';
import {NatureType, NatureCategory, NatureValeur} from './Enum';

import { natures } from '../datas/natures';

let liste = [];
const dictionnaire = {};

export class Nature implements Named, Specifiable<Nature, Nature | Art | Competence | Caracteristique> {
  public static readonly liste : Nature[] = liste;
  public static readonly enum = dictionnaire;

  private _typeSpeciality: Specificite;
  constructor(
    public readonly type: NatureType = null,
    public readonly category: NatureCategory = null,
    public readonly valeur: NatureValeur = null,
    public readonly name: string = null,
    public readonly speciality: Named | string = null
  ){
    this._typeSpeciality = new Specificite(name, speciality);
  }

  isPattern() {
    return this.type === null || this.category === null || this.valeur === null || !this._typeSpeciality.isSpecified();
  }

  include(other){
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

  exclude(other){
    return !this.include(other);
  }

  isSpecifiable() {
    return this.isPattern();
  }

  isSpecified() {
    return !this.isSpecifiable();
  }

  choices() {
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

  specify(value) {
    if(typeof value === "Nature") {
      return value;
    // } else if(this.type !== null && this.category !== null && this.valeur === null && this.name !== null) {
    //   return new Nature(this.type, this.category, value, this.name, this.speciality);
    } else {
      return new Nature(this.type, this.category, this.valeur, this.name, value);
    }
  }

  toString() {
    return this._typeSpeciality.toString();//`${name} : ${NatureType[this.type]}, ${NatureCategory[this.category]}, ${NatureValeur[this.valeur]}`;
  }

  toJSON() {
    return {
      fromJSON: "Nature",
      type: this.type,
      category: this.category,
      valeur: this.valeur,
      name: this.name,
      speciality: this.speciality
    }
  }
}

for(let ntype in natures) {
  for(let ncat in natures[ntype]) {
    for(let nval in natures[ntype][ncat]) {
      if(nval === "majeurOuMineur") {
        for(let name of natures[ntype][ncat][nval]) {
          liste.push(new Nature(
            NatureType[<string>ntype],
            NatureCategory[<string>ncat],
            NatureValeur.Majeure,
            `${name} majeur`,
          ));
          liste.push(new Nature(
            NatureType[<string>ntype],
            NatureCategory[<string>ncat],
            NatureValeur.Mineure,
            `${name} mineur`,
          ));
        }
      } else {
        for(let name of natures[ntype][ncat][nval]) {
          liste.push(new Nature(
            NatureType[<string>ntype],
            NatureCategory[<string>ncat],
            NatureValeur[<string>nval],
            name,
          ));
        }
      }
    }
  }
}

liste.sort((a, b) => {
  return a.name.localeCompare(b.name);
});


liste.forEach(function(nature){
  dictionnaire[nature.name] = nature;
});
