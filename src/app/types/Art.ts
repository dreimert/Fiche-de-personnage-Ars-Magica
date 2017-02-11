import {Xpliable} from './Xpliable';
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

export class ArtDescription {
  constructor(public name: string, public type: ArtType) {}
}

export class Art extends Xpliable implements Named {
  static Creo: ArtDescription = new ArtDescription("Creo", ArtType.Technique);
  static Intelligo: ArtDescription = new ArtDescription("Intelligo", ArtType.Technique);
  static Muto: ArtDescription = new ArtDescription("Muto", ArtType.Technique);
  static Perdo: ArtDescription = new ArtDescription("Perdo", ArtType.Technique);
  static Rego: ArtDescription = new ArtDescription("Rego", ArtType.Technique);

  static Animal: ArtDescription = new ArtDescription("Animal", ArtType.Forme);
  static Aquam: ArtDescription = new ArtDescription("Aquam", ArtType.Forme);
  static Auram: ArtDescription = new ArtDescription("Auram", ArtType.Forme);
  static Corpus: ArtDescription = new ArtDescription("Corpus", ArtType.Forme);
  static Herbam: ArtDescription = new ArtDescription("Herbam", ArtType.Forme);
  static Ignem: ArtDescription = new ArtDescription("Ignem", ArtType.Forme);
  static Imaginem: ArtDescription = new ArtDescription("Imaginem", ArtType.Forme);
  static Mentem: ArtDescription = new ArtDescription("Mentem", ArtType.Forme);
  static Terram: ArtDescription = new ArtDescription("Terram", ArtType.Forme);
  static Vim: ArtDescription = new ArtDescription("Vim", ArtType.Forme);

  constructor(public art: ArtDescription) {
    super();
  }

  get name() {
    return this.art.name;
  }

  getName() {
    return this.name;
  }

  toString() {
    return this.art.name;
  }
}
