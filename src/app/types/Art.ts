import {Xpliable, XpliableImplemantation, ConvertToXpliable} from './Xpliable';
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

export class Art implements Named, ConvertToXpliable {
  public static readonly Creo: Art = new Art("Creo", ArtType.Technique);
  public static readonly Intelligo: Art = new Art("Intelligo", ArtType.Technique);
  public static readonly Muto: Art = new Art("Muto", ArtType.Technique);
  public static readonly Perdo: Art = new Art("Perdo", ArtType.Technique);
  public static readonly Rego: Art = new Art("Rego", ArtType.Technique);

  public static readonly Animal: Art = new Art("Animal", ArtType.Forme);
  public static readonly Aquam: Art = new Art("Aquam", ArtType.Forme);
  public static readonly Auram: Art = new Art("Auram", ArtType.Forme);
  public static readonly Corpus: Art = new Art("Corpus", ArtType.Forme);
  public static readonly Herbam: Art = new Art("Herbam", ArtType.Forme);
  public static readonly Ignem: Art = new Art("Ignem", ArtType.Forme);
  public static readonly Imaginem: Art = new Art("Imaginem", ArtType.Forme);
  public static readonly Mentem: Art = new Art("Mentem", ArtType.Forme);
  public static readonly Terram: Art = new Art("Terram", ArtType.Forme);
  public static readonly Vim: Art = new Art("Vim", ArtType.Forme);

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

  constructor(readonly name: string, readonly type: ArtType) {}

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
    super(art.name, art.type);
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
