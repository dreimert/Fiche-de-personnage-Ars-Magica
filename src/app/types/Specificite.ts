import {Art} from './Art';
import {Competence} from './Competence';
import {Named} from './Named';
import {Caracteristique} from './Caracteristique';
//
// import {competences} from '../datas/competences';

export class Specificite {
  public speciality: Named | string = null;
  private _typeSpeciality: string = null;

  constructor(public name: string) {
    if(name) {
      let typeSpeciality = name.match(/.*\[(.*)\]/);
      // specilité : Art, Compétence, Caractèristique
      // autres : terrain, Pj, Dimension, PNJ
      if(!typeSpeciality) {
        this._typeSpeciality = null;
      } else {
        switch (typeSpeciality[1]) {
          case "Art": this._typeSpeciality = "art"; break;
          case "Compétence": this._typeSpeciality =  "competence"; break;
          case "Caractèristique": this._typeSpeciality =  "caracteristique"; break;
          default: this._typeSpeciality =  "string";
        };
      }
    } else {
      this._typeSpeciality = null;
    }

  }

  isSpecifiable() {
    return this._typeSpeciality !== null;
  }

  isSpecified() {
    return this.speciality !== null || !this.isSpecifiable();
  }

  choices(): any {
    switch (this._typeSpeciality) {
      case "art": return Art.liste;
      // case "competence": return competences;
      case "caracteristique": return Caracteristique.liste;
      default: return "";
    };
  }

  setSpeciality(value) {
    this.speciality = value;
    return true;
  }

  toString() {
    if(this.speciality !== null) {
      return this.name.replace(/\[.*\]/, this.speciality.toString());
    } else if(this.isSpecifiable()) {
      return this.name.replace(/\[/, '(').replace(/\]/, ')');
    } else {
      return this.name;
    }
  }
}
