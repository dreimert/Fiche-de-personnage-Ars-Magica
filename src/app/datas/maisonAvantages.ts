import { NatureType, NatureCategory, NatureValeur, Nature} from '../types/Nature';
import { Competence } from '../types/Competence';
import { Art } from '../types/Art';

let talentPourTM = Nature.enum["Talent pour [Compétence]"].clone()
console.log("Competence.enum['Théorie de la magie']", Competence.enum["Théorie de la magie"])
talentPourTM.speciality = Competence.enum["Théorie de la magie"];

let talentPourIntrigue = Nature.enum["Talent pour [Compétence]"].clone()
talentPourIntrigue.speciality = Competence.enum["Intrigue"];

let talentEnPerdo = Nature.enum["Talent en [Art]"].clone()
talentEnPerdo.speciality = Art.Perdo;

let talentEnIgnem = Nature.enum["Talent en [Art]"].clone()
talentEnIgnem.speciality = Art.Ignem;

let talentEnCreo = Nature.enum["Talent en [Art]"].clone()
talentEnCreo.speciality = Art.Creo;

let talentEnMuto = Nature.enum["Talent en [Art]"].clone()
talentEnMuto.speciality = Art.Muto;

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
  "Bjornaer": [
    {
      vertus: Nature.enum["Animal de coeur"],
      competence: "Animal de coeur",
      niveau: 1
    }
  ],
  "Bonisagus": [
  {
    vertus: talentPourTM
  },{
    vertus: talentPourIntrigue
  }],
  "Criamon": [
  {
    vertus: Nature.enum["Énigme"],
    competence: "Sagesse énigmatique",
    niveau: 1
  }],
  "ExMiscellanea": [],
  "Flambeau": [
  {
    vertus: talentEnPerdo
  }, {
    vertus: talentEnIgnem
  }],
  "Guernicus": [{
    vertus: Nature.enum["Prestige hermétique"]
  }],
  "Jerbiton": [],
  "Mercere": [
  {
    vertus: talentEnCreo
  }, {
    vertus: talentEnMuto
  }],
  "Merinita": [{
    vertus: Nature.enum["Magie féerique"],
    requis: "Un vis ou une vertus lié a la Féerie"
  }],
  "Tremere": [{
    vertus: Nature.enum["Expertise magique mineure"]
  }],
  "Tytalus": [{
    vertus: Nature.enum["Confiance en soi"]
  }],
  "Verditius": [{
    vertus: Nature.enum["Magie de Verditius"]
  }]
};
