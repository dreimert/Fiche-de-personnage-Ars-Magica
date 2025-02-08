import {Specifiable, Choices} from './Specifiable';
import {Named} from './Named';
import {Nature} from './Nature';
import {MaisonName} from './Enum';
import {maisonAvantages} from '../datas/maisonAvantages';
import {Jsonable, registerJsonable} from './Jsonable';

export class Maison implements Named, Specifiable<Maison, Nature[]>, Jsonable {
  public static readonly Bjornaer: Maison = new Maison(MaisonName.Bjornaer);
  public static readonly Bonisagus: Maison = new Maison(MaisonName.Bonisagus);
  public static readonly Criamon: Maison = new Maison(MaisonName.Criamon);
  public static readonly ExMiscellanea: Maison = new Maison(MaisonName.ExMiscellanea);
  public static readonly Flambeau: Maison = new Maison(MaisonName.Flambeau);
  public static readonly Guernicus: Maison = new Maison(MaisonName.Guernicus);
  public static readonly Jerbiton: Maison = new Maison(MaisonName.Jerbiton);
  public static readonly Mercere: Maison = new Maison(MaisonName.Mercere);
  public static readonly Merinita: Maison = new Maison(MaisonName.Merinita);
  public static readonly Tremere: Maison = new Maison(MaisonName.Tremere);
  public static readonly Tytalus: Maison = new Maison(MaisonName.Tytalus);
  public static readonly Verditius: Maison = new Maison(MaisonName.Verditius);

  public static readonly liste: Maison[] = [
    Maison.Bjornaer,
    Maison.Bonisagus,
    Maison.Criamon,
    Maison.ExMiscellanea,
    Maison.Flambeau,
    Maison.Guernicus,
    Maison.Jerbiton,
    Maison.Mercere,
    Maison.Merinita,
    Maison.Tremere,
    Maison.Tytalus,
    Maison.Verditius,
  ];

  constructor(readonly maison: MaisonName, readonly avantage: Nature[] | null = null) { }

  isPattern() : boolean {
    return !this.avantage;
  }

  include(other: Maison) : boolean {
    if(this.maison !== other.maison) {
      return false;
    } else if(!this.avantage && this.avantage !== other.avantage) {
      return false;
    }

    return true;
  }

  exclude(other: Maison) : boolean {
    return !this.include(other);
  }

  isSpecifiable() {
    return true;
  }

  isSpecified() {
    return !this.isPattern();
  }

  choices() {
    return new Choices<Nature[]>(maisonAvantages[this.maison], true);
  }

  specify(value : Nature[]) {
    return new Maison(this.maison, value);
  }

  get name() {
    return this.maison;
  }

  toString() {
    return this.name;
  }

  toJSON(): any {
    return {
      fromJSON: "Maison",
      maison: this.maison,
      avantage: this.avantage
    };
  }

  public static fromJSON(source: any) {
    return new Maison(source.maison, source.avantage);
  }
}

registerJsonable("Maison", Maison);
