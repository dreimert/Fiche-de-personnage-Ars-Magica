import {Art} from './Art';
import {Competence} from './Competence';
import {Pattern} from './Pattern';
import {Specifiable} from './Specifiable';

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

export class Nature implements Named, Selectable<any, any> {
  constructor(
    public name: string = null,
    public type: NatureType = null,
    public category: NatureCategory = null,
    public valeur: NatureValeur = null,
  ) {

  }

  isPattern() {
    return this.type !== null && this.category !== null && this.valeur !== null;
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
    return true;
  }

  exclude(other) {
    return !this.include(other);
  }

  clone() {
    return new Nature(this.name, this.type, this.category, this.valeur);
  }

  toString() {
    return this.name;//`${this.name} : ${NatureType[this.type]}, ${NatureCategory[this.category]}, ${NatureValeur[this.valeur]}`;
  }
}

export class NatureSpecialite extends Nature {
  constructor(
    public name: string = null,
    public type: NatureType = null,
    public category: NatureCategory = null,
    public valeur: NatureValeur = null,
    public speciality: Art | Competence | string = null,
  ){
    super(name, type, category, valeur);
  }

  isPattern(){
    return super.isPattern() || this.speciality === null;
  }

  isSpecifiable() {
    return true;
  }

  choices() {
    return "";
  }

  setSpeciality(value) {
    this.speciality = value;
    return true;
  }

  clone() {
    return new NatureSpecialite(this.name, this.type, this.category, this.valeur, this.speciality);
  }

  toString() {
    let name = this.name;
    if(this.speciality !== null) {
      name = name.replace(/\[.*\]/, this.speciality.toString());
    } else {
      name = name.replace(/\[/, '(').replace(/\]/, ')');
    }
    return name;//`${name} : ${NatureType[this.type]}, ${NatureCategory[this.category]}, ${NatureValeur[this.valeur]}`;
  }
}
