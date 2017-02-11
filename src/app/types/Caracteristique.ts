import { Named } from './Named';

export class Caracteristique implements Named {
  static Intelligence: string = "Intelligence";
  static Perception: string = "Perception";
  static Force: string = "Force";
  static Energie: string = "Énergie";
  static Presence: string = "Présence";
  static Communication: string = "Communication";
  static Dexterite: string = "Dextérité";
  static Vivacite: string = "Vivacité";

  static liste: string[] = [
    Caracteristique.Intelligence,
    Caracteristique.Perception,
    Caracteristique.Force,
    Caracteristique.Energie,
    Caracteristique.Presence,
    Caracteristique.Communication,
    Caracteristique.Dexterite,
    Caracteristique.Vivacite,
  ];

  private _cout: number = 0;
  private _valeur: number = 0;

  constructor(public name: string, valeur: number = 0) {
    this.valeur = valeur;
  }

  get valeur() {
    return this._valeur;
  }

  set valeur(valeur) {
    this._valeur = valeur;
    switch (valeur) {
        case -3: this._cout = -6; break;
        case -2: this._cout =  -3; break;
        case -1: this._cout =  -1; break;
        case 0: this._cout = 0; break;
        case 1: this._cout =  1; break;
        case 2: this._cout =  3; break;
        case 3: this._cout = 6; break;
    };
  }

  getName() {
    return this.name;
  }

  get cout() {return this._cout;}
}
