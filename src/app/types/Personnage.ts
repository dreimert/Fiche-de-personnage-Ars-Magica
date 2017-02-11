import { NatureType, NatureCategory, NatureValeur, Nature, NatureSpecialite} from './Nature';
import { Caracteristique } from './Caracteristique';
import { Maison } from './Maison';
import { Art } from './Art';
import { Competence } from './Competence';

export enum PersonnageType {
    Mage,
    Compagnon,
    Servant
}

export class Personnage {
  name: string;
  concept: string;
  type: PersonnageType;
  maison: Maison;
  maisonAvantage: string;
  vertus: Nature[];
  vis: Nature[];
  caracterisque: Caracteristique[];
  competences: Competence[];
  art: Art[];
}
