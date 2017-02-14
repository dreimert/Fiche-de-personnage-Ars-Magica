import { Named } from './Named';

// Même pattern que Art, Competence et Nature ?
export class Caracteristique implements Named {
  public static readonly Intelligence: Caracteristique = new Caracteristique("Intelligence");
  public static readonly Perception: Caracteristique = new Caracteristique("Perception");
  public static readonly Force: Caracteristique = new Caracteristique("Force");
  public static readonly Energie: Caracteristique = new Caracteristique("Énergie");
  public static readonly Presence: Caracteristique = new Caracteristique("Présence");
  public static readonly Communication: Caracteristique = new Caracteristique("Communication");
  public static readonly Dexterite: Caracteristique = new Caracteristique("Dextérité");
  public static readonly Vivacite: Caracteristique = new Caracteristique("Vivacité");

  public static readonly liste: Caracteristique[] = [
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

  toJSON() {
    return {
      fromJSON: "Caracteristique",
      name: this.name,
      valeur: this._valeur
    };
  }
}
