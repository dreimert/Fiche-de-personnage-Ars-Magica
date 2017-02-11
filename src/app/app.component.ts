import { Component } from '@angular/core';

import { PersonnageType, Personnage } from './types/Personnage';
import { Maison } from './types/Maison';
import { NatureType, NatureCategory, NatureValeur, Nature, NatureSpecialite} from './types/Nature';
import { Caracterisque } from './types/Caracterisque';
import { Xpliable } from './types/Xpliable';
import { Competence } from './types/Competence';
import { Art } from './types/Art';

import { naturesEnum, natures } from './datas/natures';
import { competencesEnum, competences } from './datas/competences';

import { enumToListe } from './utiles/enumToListe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Création de personnage';

  types = {
    liste: enumToListe(PersonnageType),
    names: PersonnageType
  }

  natures = natures;

  // personnage = {
  //   maison: null,
  //   maisonAvantage: null,
  //   vertus: [],
  //   vis: [],
  //   competences: [],
  // };
  personnage = {
    type: PersonnageType.Mage,
    maison: "Merinita",
    maisonAvantage: null,
    vertus: [
      naturesEnum["Le Don"],
      naturesEnum["Mage hermétique"],
      naturesEnum["Magie féerique"],
      naturesEnum["Magie de Diedne"],
      naturesEnum["Sang féerique saillant"],
      naturesEnum["Double vue"],
      naturesEnum["Verdeur"],
      // naturesEnum["Affinité pour Rego"],
      // naturesEnum["Talent pour Rego"],
      // naturesEnum["Expertise magique mineur : Maintient de sorts"],
    ],
    vis: [
      naturesEnum["Sombre secret"],
      // naturesEnum["Technique déficiente : Perdo"],
      naturesEnum["Optimisme"],
      naturesEnum["Ami féerique"],
      naturesEnum["Visions" ],
      naturesEnum["Petite carrure"],
      naturesEnum["Magie étrange"],
    ],
    caracterisques: [
      new Caracterisque("Intelligence", 3),
      new Caracterisque("Perception", 2),
      new Caracterisque("Force", -3),
      new Caracterisque("Énergie", 2),
      new Caracterisque("Présence", 2),
      new Caracterisque("Communication", 1),
      new Caracterisque("Dextérité", 0),
      new Caracterisque("Vivacité", -2),
    ],
    competences: competences
  };

  constructor() {

  }

  get typeModel() {
    return this.personnage.type;
  }

  set typeModel(value) {
    this.personnage.vertus = [];
    this.personnage.vis = [];
    this.personnage.maisonAvantage = null;
    this.personnage.maison = null;
    this.personnage.type = value;
  }

  deleteVertus(v) {
    this.personnage.vertus.splice(this.personnage.vertus.indexOf(v), 1);
  }
  deleteVis(v) {
    this.personnage.vis.splice(this.personnage.vis.indexOf(v), 1);
  }

  get natureSelected() : Nature {
    return;
  }

  set natureSelected(nature) {
    console.log("nature", nature);
    if(nature === null) {
      return;
    } else if(nature.type === NatureType.Vertus) {
      this.personnage.vertus.push(nature);
    } else {
      this.personnage.vis.push(nature);
    }
  }

  natureColor(nature) {
    if(nature.type === NatureType.Vertus) {
      if(nature.valeur === NatureValeur.Majeure) {
        return "green";
      } else if (nature.valeur === NatureValeur.Mineure) {
        return "green-lite";
      } else {
        return;
      }
    } else {
      if(nature.valeur === NatureValeur.Majeure) {
        return "red";
      } else if (nature.valeur === NatureValeur.Mineure) {
        return "red-lite";
      } else {
        return;
      }
    }

  }
}
