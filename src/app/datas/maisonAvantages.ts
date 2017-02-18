import { Nature} from '../types/Nature';
import { Competence } from '../types/Competence';
import { Art } from '../types/Art';
import { NatureType, NatureCategory, NatureValeur, MaisonName } from '../types/Enum';

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

export const jerbitonNature = new Nature(
  NatureType.Vertus,
  null,
  NatureValeur.Mineure
);

export const maisonAvantages = {
  [MaisonName.Bjornaer]: [[Nature.enum["Animal de coeur"]]],
  [MaisonName.Bonisagus]: [[
    Nature.enum["Talent pour [Compétence]"].specify(Competence.enum["Théorie de la magie"]),
    Nature.enum["Talent pour [Compétence]"].specify(Competence.enum["Intrigue"])
  ]],
  [MaisonName.Criamon]: [[Nature.enum["Énigme"]]],
  [MaisonName.ExMiscellanea]: [
    Nature.liste.filter(exMiscellaneaNature.mineur.include, exMiscellaneaNature.mineur),
    Nature.liste.filter(exMiscellaneaNature.majeur.est.include, exMiscellaneaNature.majeur.est)
                .filter(exMiscellaneaNature.majeur.nestpas.exclude, exMiscellaneaNature.majeur.nestpas),
    Nature.liste.filter(exMiscellaneaNature.vis.include, exMiscellaneaNature.vis)
  ],
  [MaisonName.Flambeau]: [[
    Nature.enum["Talent en [Art]"].specify(Art.Perdo),
    Nature.enum["Talent en [Art]"].specify(Art.Ignem)
  ]],
  [MaisonName.Guernicus]: [[Nature.enum["Prestige hermétique"]]],
  [MaisonName.Jerbiton]: [Nature.liste.filter(jerbitonNature.include, jerbitonNature)],
  [MaisonName.Mercere]: [[
    Nature.enum["Talent en [Art]"].specify(Art.Creo),
    Nature.enum["Talent en [Art]"].specify(Art.Muto)
  ]],
  [MaisonName.Merinita]: [[
    Nature.enum["Magie féerique"] //requis: "Un vis ou une vertus lié a la Féerie"
  ]],
  [MaisonName.Tremere]: [[Nature.enum["Expertise magique mineure"]]],
  [MaisonName.Tytalus]: [[Nature.enum["Confiance en soi"]]],
  [MaisonName.Verditius]: [[Nature.enum["Magie de Verditius"]]]
};
