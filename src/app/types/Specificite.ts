import {Art} from './Art';
import {Competence} from './Competence';
import {Named} from './Named';
import {Caracteristique} from './Caracteristique';
import {Specifiable, Choices} from './Specifiable';

export class Specificite {
  private _typeSpeciality: string = null;

  constructor(public readonly name: string, public readonly speciality: Named | string = null) {
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
          default: this._typeSpeciality =  typeSpeciality[1];
        };
      }
    } else {
      this._typeSpeciality = null;
    }

  }

  isSpecifiable() {
    return this.name === null || (this._typeSpeciality !== null && this.speciality === null);
  }

  isSpecified() {
    return !this.isSpecifiable();
  }

  get type() {
    return this._typeSpeciality;
  }

  toString() {
    if(this.speciality !== null) {
      return this.name.replace(/\[.*\]/, this.speciality.toString());
    } else {
      return this.name.replace(/\[/, '(').replace(/\]/, ')');
    }
  }
}
