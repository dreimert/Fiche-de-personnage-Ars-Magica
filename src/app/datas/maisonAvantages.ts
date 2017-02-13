import { NatureType, NatureCategory, NatureValeur, Nature} from '../types/Nature';
import { Competence } from '../types/Competence';
import { Art } from '../types/Art';

export const exMiscellaneaNature = {
  mineur: new Nature(
    NatureType.Vertus,
    NatureCategory.Hermétique,
    NatureValeur.Mineure
  ),
  majeur: {
    est: new Nature(
      NatureType.Vertus,
      null, // non-hermétique
      NatureValeur.Majeure
    ),
    nestpas: new Nature(
      null,
      NatureCategory.Hermétique,
      null
    ),
  },
  vis: new Nature(
    NatureType.Vis,
    NatureCategory.Hermétique,
    NatureValeur.Majeure
  ),
}

export const jerbitonNature = {
  vertus: new Nature(
    NatureType.Vertus,
    null,
    NatureValeur.Mineure
  ),
  message: "Vertus mineure lié à l'hérudition, aux arts ou aux intéractions vulgaire"
}

export const maisonAvantages = {
  "Bjornaer": [Nature.enum["Animal de coeur"]],
  "Bonisagus": [
    Nature.enum["Talent pour [Compétence]"].specify(Competence.enum["Théorie de la magie"]),
    Nature.enum["Talent pour [Compétence]"].specify(Competence.enum["Intrigue"])
  ],
  "Criamon": [Nature.enum["Énigme"]],
  "ExMiscellanea": [],
  "Flambeau": [
    Nature.enum["Talent en [Art]"].specify(Art.Perdo),
    Nature.enum["Talent en [Art]"].specify(Art.Ignem)
  ],
  "Guernicus": [Nature.enum["Prestige hermétique"]],
  "Jerbiton": [],
  "Mercere": [
    Nature.enum["Talent en [Art]"].specify(Art.Creo),
    Nature.enum["Talent en [Art]"].specify(Art.Muto)
  ],
  "Merinita": [
    Nature.enum["Magie féerique"] //requis: "Un vis ou une vertus lié a la Féerie"
  ],
  "Tremere": [Nature.enum["Expertise magique mineure"]],
  "Tytalus": [Nature.enum["Confiance en soi"]],
  "Verditius": [Nature.enum["Magie de Verditius"]]
};
