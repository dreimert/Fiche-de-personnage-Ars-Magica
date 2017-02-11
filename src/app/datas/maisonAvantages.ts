import { NatureType, NatureCategory, NatureValeur, Nature, NatureSpecialite} from '../types/Nature';
import { Competence } from '../types/Competence';
import { Art } from '../types/Art';
import { competencesEnum } from './competences';

import { naturesEnum } from './natures';

let talentPourTM = naturesEnum["Talent pour (Compétences)"].clone()
console.log("competencesEnum['Théorie de la magie']", competencesEnum["Théorie de la magie"])
talentPourTM.specialite = competencesEnum["Théorie de la magie"];

let talentPourIntrigue = naturesEnum["Talent pour (Compétences)"].clone()
talentPourIntrigue.specialite = competencesEnum["Intrigue"];

let talentEnPerdo = naturesEnum["Talent en (Art)"].clone()
talentEnPerdo.specialite = new Art(Art.Perdo);

let talentEnIgnem = naturesEnum["Talent en (Art)"].clone()
talentEnIgnem.specialite = new Art(Art.Ignem);

let talentEnCreo = naturesEnum["Talent en (Art)"].clone()
talentEnCreo.specialite = new Art(Art.Creo);

let talentEnMuto = naturesEnum["Talent en (Art)"].clone()
talentEnMuto.specialite = new Art(Art.Muto);

export const exMiscellaneaNature = {
  mineur: new Nature(
    null,
    NatureType.Vertus,
    NatureCategory.Hermétique,
    NatureValeur.Mineure
  ),
  majeur: {
    est: new Nature(
      null,
      NatureType.Vertus,
      null, // non-hermétique
      NatureValeur.Majeure
    ),
    nestpas: new Nature(
      null,
      null,
      NatureCategory.Hermétique,
      null
    ),
  },
  vis: new Nature(
    null,
    NatureType.Vis,
    NatureCategory.Hermétique,
    NatureValeur.Majeure
  ),
}

export const jerbitonNature = "Vertus mineure lié à l'hérudition, aux arts ou aux intéractions vulgaire";

export const maisonAvantages = {
  "Bjornaer": [
    {
      vertus: naturesEnum["Animal de coeur"],
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
    vertus: naturesEnum["Énigme"],
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
    vertus: naturesEnum["Prestige hermétique"]
  }],
  "Jerbiton": [],
  "Mercere": [
  {
    vertus: talentEnCreo
  }, {
    vertus: talentEnMuto
  }],
  "Merinita": [{
    vertus: naturesEnum["Magie féerique"],
    requis: "Un vis ou une vertus lié a la Féerie"
  }],
  "Tremere": [{
    vertus: naturesEnum["Expertise magique mineure"]
  }],
  "Tytalus": [{
    vertus: naturesEnum["Confiance en soi"]
  }],
  "Verditius": [{
    vertus: naturesEnum["Magie de Verditius"]
  }]
};
