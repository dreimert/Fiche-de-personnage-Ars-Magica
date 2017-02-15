import { Nature} from '../types/Nature';
import { Competence } from '../types/Competence';
import { Art } from '../types/Art';
import { NatureType, NatureCategory, NatureValeur, Maison } from '../types/Enum';

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
  [Maison.Bjornaer]: [Nature.enum["Animal de coeur"]],
  [Maison.Bonisagus]: [
    Nature.enum["Talent pour [Compétence]"].specify(Competence.enum["Théorie de la magie"]),
    Nature.enum["Talent pour [Compétence]"].specify(Competence.enum["Intrigue"])
  ],
  [Maison.Criamon]: [Nature.enum["Énigme"]],
  [Maison.ExMiscellanea]: [],
  [Maison.Flambeau]: [
    Nature.enum["Talent en [Art]"].specify(Art.Perdo),
    Nature.enum["Talent en [Art]"].specify(Art.Ignem)
  ],
  [Maison.Guernicus]: [Nature.enum["Prestige hermétique"]],
  [Maison.Jerbiton]: [],
  [Maison.Mercere]: [
    Nature.enum["Talent en [Art]"].specify(Art.Creo),
    Nature.enum["Talent en [Art]"].specify(Art.Muto)
  ],
  [Maison.Merinita]: [
    Nature.enum["Magie féerique"] //requis: "Un vis ou une vertus lié a la Féerie"
  ],
  [Maison.Tremere]: [Nature.enum["Expertise magique mineure"]],
  [Maison.Tytalus]: [Nature.enum["Confiance en soi"]],
  [Maison.Verditius]: [Nature.enum["Magie de Verditius"]]
};
