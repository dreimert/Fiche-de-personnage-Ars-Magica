import { Named } from './Named';

// Même pattern que Art, Competence et Nature ?
export class Caracteristique implements Named {
  static Intelligence: Caracteristique = new Caracteristique("Intelligence");
  static Perception: Caracteristique = new Caracteristique("Perception");
  static Force: Caracteristique = new Caracteristique("Force");
  static Energie: Caracteristique = new Caracteristique("Énergie");
  static Presence: Caracteristique = new Caracteristique("Présence");
  static Communication: Caracteristique = new Caracteristique("Communication");
  static Dexterite: Caracteristique = new Caracteristique("Dextérité");
  static Vivacite: Caracteristique = new Caracteristique("Vivacité");

  static liste: Caracteristique[] = [
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

  constructor(public readonly name: string, valeur: number = 0) {
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

  get cout() {return this._cout;}

  toStrign() {
    return this.name;
  }
}
