import {Xpliable, XpliableImplemantation, ConvertToXpliable, XpliableLabel} from './Xpliable';
import {Specifiable, Choices} from './Specifiable';
import {Named} from './Named';
import {Technique, Forme, ArtType} from './Enum';
import {Jsonable, registerJsonable} from './Jsonable';

export class Art implements Named, ConvertToXpliable, Specifiable<Art, Art>, Jsonable {
  public static readonly Creo: Art = new Art(ArtType.Technique, Technique.Creo);
  public static readonly Intelligo: Art = new Art(ArtType.Technique, Technique.Intelligo);
  public static readonly Muto: Art = new Art(ArtType.Technique, Technique.Muto);
  public static readonly Perdo: Art = new Art(ArtType.Technique, Technique.Perdo);
  public static readonly Rego: Art = new Art(ArtType.Technique, Technique.Rego);

  public static readonly Animal: Art = new Art(ArtType.Forme, Forme.Animal);
  public static readonly Aquam: Art = new Art(ArtType.Forme, Forme.Aquam);
  public static readonly Auram: Art = new Art(ArtType.Forme, Forme.Auram);
  public static readonly Corpus: Art = new Art(ArtType.Forme, Forme.Corpus);
  public static readonly Herbam: Art = new Art(ArtType.Forme, Forme.Herbam);
  public static readonly Ignem: Art = new Art(ArtType.Forme, Forme.Ignem);
  public static readonly Imaginem: Art = new Art(ArtType.Forme, Forme.Imaginem);
  public static readonly Mentem: Art = new Art(ArtType.Forme, Forme.Mentem);
  public static readonly Terram: Art = new Art(ArtType.Forme, Forme.Terram);
  public static readonly Vim: Art = new Art(ArtType.Forme, Forme.Vim);

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
    return !this.name;
  }

  include(other: Art) : boolean {
    if(this.name && this.name !== other.name) {
      return false;
    } else if(this.type && this.type !== other.type) {
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

  toJSON(): any {
    return {
      fromJSON: "Art",
      type: this.type,
      name: this.name
    };
  }

  public static fromJSON(source: any) {
    return new Art(
      source.type,
      source.name
    );
  }
}

registerJsonable("Art", Art);

export class ArtXpliable extends Art implements Xpliable {
  private _xp : XpliableImplemantation;

  constructor(public readonly art: Art, labels: XpliableLabel[] = []) {
    super(art.type, art.name);

    this._xp = new XpliableImplemantation(1, labels);
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

  override toJSON(): any {
    return {
      fromJSON: "ArtXpliable",
      art: this.art,
      labels: this._xp.labels
    };
  }

  public static override fromJSON(source: any) {
    return new ArtXpliable(
      source.art,
      source.labels
    );
  }
}

registerJsonable("ArtXpliable", ArtXpliable);
