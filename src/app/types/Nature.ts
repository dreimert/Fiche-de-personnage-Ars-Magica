import {Art} from './Art';
import {Competence} from './Competence';

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

export class Nature {
  constructor(
    public nom: string = null,
    public type: NatureType = null,
    public category: NatureCategory = null,
    public valeur: NatureValeur = null,
  ) {

  }

  isPattern() {
    return this.type !== null && this.category !== null && this.valeur !== null;
  }

  isTemplate() {
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
    return new Nature(this.nom, this.type, this.category, this.valeur);
  }

  toString() {
    return `${this.nom} : ${NatureType[this.type]}, ${NatureCategory[this.category]}, ${NatureValeur[this.valeur]}`;
  }
}

export class NatureSpecialite extends Nature {
  constructor(
    public nom: string = null,
    public type: NatureType = null,
    public category: NatureCategory = null,
    public valeur: NatureValeur = null,
    public specialite: Art | Competence | string = null,
  ){
    super(nom, type, category, valeur);
  }

  isPattern(){
    return super.isPattern() || this.specialite === null;
  }

  isTemplate() {
    return true;
  }

  clone() {
    return new NatureSpecialite(this.nom, this.type, this.category, this.valeur, this.specialite);
  }

  toString() {
    let nom = this.nom;
    if(this.specialite !== null) {
      nom = nom.replace(/\(.*\)/, this.specialite.toString());
    }
    return `${nom} : ${NatureType[this.type]}, ${NatureCategory[this.category]}, ${NatureValeur[this.valeur]}`;
  }
}
