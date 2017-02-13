import {Xpliable, XpliableImplemantation, ConvertToXpliable} from './Xpliable';
import {Named} from './Named';
import {Specifiable, Choices} from './Specifiable';
import {Specificite} from './Specificite';

export enum CompetenceType {
  Générale,
  Académique,
  Mystique,
  Martiale,
  Surnaturelle,
  Sort
}

let data = {
  [CompetenceType[CompetenceType.Générale]]: [
    "Artisanat [types]",
    "Athlétisme",
    "Attention",
    "Bagarre",
    "Charme",
    "Chasse",
    "Chirurgie",
    "Commandement",
    "Concentration",
    "Connaissance [organisation]",
    "Connaissance des animaux",
    "Connaissance des gens",
    "Connaissance [domaine]",
    "Discrétion",
    "Doigts agiles",
    "Enseignement",
    "Équitation",
    "Étiquette",
    "Intrigue",
    "[Langue]",
    "Marchandage",
    "Musique",
    "Natation",
    "Profession [type]",
    "Ripaille",
    "Survie",
    "Tromperie",
  ],
  [CompetenceType[CompetenceType.Académique]]: [
    "Ars libéraux",
    "Droit civil et canon",
    "Droit commun",
    "[Langue ancienne]",
    "Médecine",
    "Philosophies",
    "Théologie"
  ],
  [CompetenceType[CompetenceType.Mystique]]: [
    "Connaissance de l'occulte",
    "Connaissance de la Féerie",
    "Connaissance de la magie",
    "Connaissance du Divin",
    "Droit hermétique",
    "Finesse",
    "Parma Magica",
    "Pénétration",
    "Théorie de la magie"
  ],
  [CompetenceType[CompetenceType.Martiale]]: [
    "Archerie",
    "Armes à deux mains",
    "Armes à une main",
    "Armes de jet"
  ],
  [CompetenceType[CompetenceType.Surnaturelle]]: [
    "Changeforme",
    "Double vue",
    "Empathie avec les animaux",
    "Hypnotisme",
    "Musique enchanteresse",
    "Perception de la sainteté et de la malignité",
    "Prémonitions",
    "Sens de la nature",
    "Sensibilité à la magie",
    "Sourcier"
  ]
}

let liste = [];
let dictionnaire = {};

export class Competence implements Named, ConvertToXpliable, Specifiable<Competence, Competence> {
  public static readonly liste : Competence[] = liste;
  public static readonly enum = dictionnaire;

  private _typeSpeciality: Specificite;

  constructor(readonly type: CompetenceType, readonly name: string = null, readonly speciality: string = null) {
    this._typeSpeciality = new Specificite(name, speciality);
  }

  isPattern() : boolean {
    return this.type === null || !this._typeSpeciality.isSpecified();
  }

  include(other: Competence) : boolean {
    if(this.name !== null && this.name !== other.name) {
      return false;
    }
    if(this.type !== null && this.type !== other.type) {
      return false;
    }
    return true;
  }

  exclude(other: Competence) : boolean {
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
      return new Choices<Competence>(Competence.liste);
    } else if(this.name === null) {
      return new Choices<Competence>(Competence.liste.filter(this.include, this));
    } else {
      return new Choices<Competence>();
    }
  }

  specify(value) {
    if(typeof value === "string") {
      return new Competence(this.type, this.name, value);
    } else {
      return value;
    }
  }

  convertToXpliable() {
    return new CompetenceXpliable(this);
  }

  toString() {
    return this._typeSpeciality.toString();
  }
}

export class CompetenceXpliable extends Competence implements Xpliable {
  private _xp : XpliableImplemantation;
  constructor(public readonly competence: Competence, xp: number = 0) {
    super(competence.type, competence.name);
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

for(let ctype in data) {
  for(let name of data[ctype]) {
    liste.push(new Competence(
      CompetenceType[<string>ctype],
      name
    ));
  }
}

liste.forEach(function(competence){
  dictionnaire[competence.name] = competence;
});
