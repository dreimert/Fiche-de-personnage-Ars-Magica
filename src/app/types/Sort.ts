import {Xpliable, XpliableImplemantation, ConvertToXpliable, XpliableLabel} from './Xpliable';
import {Named} from './Named';
import {Technique, Forme, ArtType, SortPortee, SortDuree, SortCible, SortSens} from './Enum';
import {Jsonable, registerJsonable} from './Jsonable';
import {Art} from './Art';

import { enumToListe } from '../utiles/enumToListe';

export interface Modificateur {
  readonly modificateur: number;
}

export class Portee implements Named, Modificateur, Jsonable {
  public static readonly Personnel = new Portee("Personnel", 0);
  public static readonly Toucher = new Portee("Toucher", 1);
  public static readonly Regard = new Portee("Regard", 1);
  public static readonly Voix = new Portee("Voix", 2);
  public static readonly Vue = new Portee("Vue", 3);
  public static readonly LienMystique = new Portee("Lien mystique", 4);

  public static readonly liste = [
    Portee.Personnel,
    Portee.Toucher,
    Portee.Regard,
    Portee.Voix,
    Portee.Vue,
    Portee.LienMystique,
  ]

  constructor(readonly name: string, readonly modificateur: number) {}

  toString() {
    return `+${this.modificateur} ${this.name}`;
  }

  toJSON() {
    return {
      fromJSON: "Portee",
      name: this.name,
      modificateur: this.modificateur
    }
  }

  public static fromJSON (source: any) {
    return new Portee(source.name, source.modificateur);
  }
}

registerJsonable("Portee", Portee);

export class Duree implements Named, Modificateur, Jsonable {
  public static readonly Momentane = new Duree("Momentané", 0);
  public static readonly Concentration = new Duree("Concentration", 1);
  public static readonly Diametre = new Duree("Diamètre", 1);
  public static readonly Soleil = new Duree("Soleil", 2);
  public static readonly Anneau = new Duree("Anneau", 2);
  public static readonly Lune = new Duree("Lune", 3);
  public static readonly Annee = new Duree("Année", 4);

  public static readonly liste = [
    Duree.Momentane,
    Duree.Concentration,
    Duree.Diametre,
    Duree.Soleil,
    Duree.Anneau,
    Duree.Lune,
    Duree.Annee,
  ]

  constructor(readonly name: string, readonly modificateur: number) {}

  toString() {
    return `+${this.modificateur} ${this.name}`;
  }

  toJSON() {
    return {
      fromJSON: "Duree",
      name: this.name,
      modificateur: this.modificateur
    }
  }

  public static fromJSON (source: any) {
    return new Duree(source.name, source.modificateur);
  }
}

registerJsonable("Duree", Duree);

export class Cible implements Named, Modificateur, Jsonable {
  public static readonly Individu = new Cible("Individu", 0);
  public static readonly Cercle = new Cible("Cercle", 0);
  public static readonly Partie = new Cible("Partie", 1);
  public static readonly Groupe = new Cible("Groupe", 2);
  public static readonly Piece = new Cible("Pièce", 2);
  public static readonly Structure = new Cible("Structure", 3);
  public static readonly Zone = new Cible("Zone", 4);

  public static readonly liste = [
    Cible.Individu,
    Cible.Cercle,
    Cible.Partie,
    Cible.Groupe,
    Cible.Piece,
    Cible.Structure,
    Cible.Zone,
  ]

  constructor(readonly name: string, readonly modificateur: number) {}

  toString() {
    return `+${this.modificateur} ${this.name}`;
  }

  toJSON() {
    return {
      fromJSON: "Cible",
      name: this.name,
      modificateur: this.modificateur
    }
  }

  public static fromJSON (source: any) {
    return new Cible(source.name, source.modificateur);
  }
}

registerJsonable("Cible", Cible);

export class Sort implements Named, ConvertToXpliable, Jsonable {

  private _niveau = 0;
  public readonly portees = enumToListe;

  constructor(
    readonly name: string,
    readonly technique?: Art,
    readonly forme?: Art,
    readonly base: number = 0,
    readonly portee?: Portee,
    readonly duree?: Duree,
    readonly cible?: Cible,
    readonly modificateur: number = 0,
    readonly description: string = "",
    readonly complements: Array<Art> = []
  ) {
    this.updateNiveau();
  }

  updateNiveau() {
    this._niveau = this.calcNiveau();
  }

  calcNiveau () {
    let lvl = this.base;

    let sortModif = function() {
      return lvl >= 5 ? 5 : 1;
    }

    let addValeur = (valeur: number) => {
      while(valeur > 0) {
        lvl += sortModif();
        valeur--;
      }
    }

    addValeur(this.portee?.modificateur || 0);
    addValeur(this.duree?.modificateur || 0);
    addValeur(this.cible?.modificateur || 0);
    addValeur(this.modificateur);

    return lvl;
  }

  get niveau() {
    return this._niveau;
  }

  convertToXpliable() {
    return new SortXpliable(this);
  }

  toString() {
    return this.name;
  }

  toJSON(): any {
    return {
      fromJSON: "Sort",
      name: this.name,
      technique: this.technique,
      forme: this.forme,
      base: this.base,
      portee: this.portee,
      duree: this.duree,
      cible: this.cible,
      modificateur: this.modificateur,
      description: this.description,
      complements: this.complements,
    };
  }

  public static fromJSON(source: any) {
    return new Sort(
      source.name,
      source.technique,
      source.forme,
      source.base,
      source.portee,
      source.duree,
      source.cible,
      source.modificateur,
      source.description,
      source.complements,
    );
  }
}

registerJsonable("Sort", Sort);

export class SortXpliable extends Sort implements Xpliable {
  private _xp : XpliableImplemantation;
  constructor(public readonly sort: Sort, labels: XpliableLabel[] = []) {
    super(
      sort.name,
      sort.technique,
      sort.forme,
      sort.base,
      sort.portee,
      sort.duree,
      sort.cible,
      sort.modificateur,
      sort.description,
      sort.complements,
    );
    this._xp = new XpliableImplemantation(5, labels);
  }

  getLabel(name: string) {
    return this._xp.getLabel(name);
  }

  setLabel(name: string, xp : number) {
    this._xp.setLabel(name, xp);
    return this;
  }

  removeLabel(name: string) : boolean {
    return this._xp.removeLabel(name);
  }

  get labels() {
    return this._xp.labels;
  }

  get xp(): number {
    return this._xp.xp;
  }

  get lvl() : number {
    return this._xp.lvl;
  }

  override toJSON (): any {
    return {
      fromJSON: "SortXpliable",
      sort: this.sort,
      labels: this._xp.labels
    };
  }

  public static override fromJSON (source: any) {
    return new SortXpliable(
      source.sort,
      source.labels
    );
  }
}

registerJsonable("SortXpliable", SortXpliable);
