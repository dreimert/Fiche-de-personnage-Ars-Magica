import {Xpliable, XpliableImplemantation, ConvertToXpliable} from './Xpliable';
import {Specifiable, Choices} from './Specifiable';
import {Named} from './Named';

export enum Technique {
  Creo,
  Intelligo,
  Muto,
  Perdo,
  Rego,
}

export enum Forme {
  Animal,
  Aquam,
  Auram,
  Corpus,
  Herbam,
  Ignem,
  Imaginem,
  Mentem,
  Terram,
  Vim,
}

export enum ArtType {
  Technique,
  Forme
}

export class Art implements Named, ConvertToXpliable, Specifiable<Art, Art> {
  public static readonly Creo: Art = new Art(ArtType.Technique, "Creo");
  public static readonly Intelligo: Art = new Art(ArtType.Technique, "Intelligo");
  public static readonly Muto: Art = new Art(ArtType.Technique, "Muto");
  public static readonly Perdo: Art = new Art(ArtType.Technique, "Perdo");
  public static readonly Rego: Art = new Art(ArtType.Technique, "Rego");

  public static readonly Animal: Art = new Art(ArtType.Forme, "Animal");
  public static readonly Aquam: Art = new Art(ArtType.Forme, "Aquam");
  public static readonly Auram: Art = new Art(ArtType.Forme, "Auram");
  public static readonly Corpus: Art = new Art(ArtType.Forme, "Corpus");
  public static readonly Herbam: Art = new Art(ArtType.Forme, "Herbam");
  public static readonly Ignem: Art = new Art(ArtType.Forme, "Ignem");
  public static readonly Imaginem: Art = new Art(ArtType.Forme, "Imaginem");
  public static readonly Mentem: Art = new Art(ArtType.Forme, "Mentem");
  public static readonly Terram: Art = new Art(ArtType.Forme, "Terram");
  public static readonly Vim: Art = new Art(ArtType.Forme, "Vim");

  public static readonly liste: Art[] = [
    Art.Creo,
    Art.Intelligo,
    Art.Muto,
    Art.Perdo,
    Art.Rego,
    Art.Animal,
    Art.Aquam,
    Art.Auram,
    Art.Corpus,
    Art.Herbam,
    Art.Ignem,
    Art.Imaginem,
    Art.Mentem,
    Art.Terram,
    Art.Vim,
  ];

  constructor(readonly type: ArtType, readonly name: string) {
    if(this.name && (this.type === null || this.type === undefined)) {
      throw new Error("Vous ne pouvez pas spécifier un name sans type");
    }
  }

  isPattern() : boolean {
    // Un art nommé sans type est impossible
    // Un art sans nom mais avec type permet de choisir entre Technique et Forme
    // Un art sans nom ni type est au choix
    return this.name === null;
  }

  include(other: Art) : boolean {
    if(this.name !== null && this.name !== other.name) {
      return false;
    }
    if(this.type !== null && this.type !== other.type) {
      return false;
    }
    return true;
  }

  exclude(other: Art) : boolean {
    return !this.include(other);
  }

  isSpecifiable() {
    return this.isPattern();
  }

  isSpecified() {
    return !this.isSpecifiable();
  }

  choices() {
    if(this.type === null) {
      return new Choices<Art>(Art.liste);
    } else {
      return new Choices<Art>(Art.liste.filter(this.include, this));
    }
  }

  specify(value : Art) {
    return value;
  }

  convertToXpliable() {
    return new ArtXpliable(this);
  }

  toString() {
    return this.name;
  }
}

export class ArtXpliable extends Art implements Xpliable {
  private _xp : XpliableImplemantation;
  constructor(public readonly art: Art, xp: number = 0) {
    super(art.type, art.name);
    this._xp = new XpliableImplemantation(1, xp);
  }

  set xp(xp: number) {
    this._xp.xp = xp;
  };

  get xp(): number {
    return this._xp.xp;
  }

  get lvl() : number {
    return this._xp.lvl;
  }
}
