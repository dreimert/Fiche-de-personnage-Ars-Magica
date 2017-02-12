import {Art} from './Art';
import {Competence} from './Competence';
import {Named} from './Named';
import {Caracteristique} from './Caracteristique';
import {Specifiable} from './Specifiable';
import {Specificite} from './Specificite';

import {competences} from '../datas/competences';

export enum NatureType {
  Vertus,
  Vis
}

export enum NatureCategory {
  Hermétique,
  Surnaturelle,
  StatutSocial,
  Générale,
  Personnalité,
  Histoire,
  Spéciale
}

export enum NatureValeur {
  Majeure = 3,
  Mineure = 1,
  Gratuite = 0
}

export class Nature implements Named, Specifiable<any, any> {
  private _typeSpeciality: Specificite;
  constructor(
    public name: string = null,
    public type: NatureType = null,
    public category: NatureCategory = null,
    public valeur: NatureValeur = null,
    public speciality: Named | string = null
  ){
    this._typeSpeciality = new Specificite(name);
  }

  isPattern() {
    return this.type !== null && this.category !== null && this.valeur !== null && !this._typeSpeciality.isSpecified();
   }

  include(other){
    if(this.name !== null && this.name !== other.name) {
      return false;
    }
    if(this.type !== null && this.type !== other.type) {
      return false;
    }
    if(this.category !== null && this.category !== other.category) {
      return false;
    }
    if(this.valeur !== null && this.valeur !== other.valeur) {
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
    return new Nature(this.name, this.type, this.category, this.valeur, this.speciality);
  }

  toString() {
    return this._typeSpeciality.toString();//`${name} : ${NatureType[this.type]}, ${NatureCategory[this.category]}, ${NatureValeur[this.valeur]}`;
  }
}
