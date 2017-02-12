import { Component } from '@angular/core';

import { PersonnageType, Personnage } from './types/Personnage';
import { Maison } from './types/Maison';
import { NatureType, NatureCategory, NatureValeur, Nature} from './types/Nature';
import { Caracteristique } from './types/Caracteristique';
import { Xpliable } from './types/Xpliable';
import { Competence } from './types/Competence';
import { Art } from './types/Art';

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

  natures = Nature.liste;

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
      Nature.enum["Le Don"],
      Nature.enum["Mage hermétique"],
      Nature.enum["Magie féerique"],
      Nature.enum["Magie de Diedne"],
      Nature.enum["Sang féerique saillant"],
      Nature.enum["Double vue"],
      Nature.enum["Verdeur"],
      // Nature.enum["Affinité pour Rego"],
      // Nature.enum["Talent pour Rego"],
      // Nature.enum["Expertise magique mineur : Maintient de sorts"],
    ],
    vis: [
      Nature.enum["Sombre secret"],
      // Nature.enum["Technique déficiente : Perdo"],
      Nature.enum["Optimisme"],
      Nature.enum["Ami féerique"],
      Nature.enum["Visions" ],
      Nature.enum["Petite carrure"],
      Nature.enum["Magie étrange"],
    ],
    caracterisques: [
      new Caracteristique("Intelligence", 3),
      new Caracteristique("Perception", 2),
      new Caracteristique("Force", -3),
      new Caracteristique("Énergie", 2),
      new Caracteristique("Présence", 2),
      new Caracteristique("Communication", 1),
      new Caracteristique("Dextérité", 0),
      new Caracteristique("Vivacité", -2),
    ],
    competences: Competence.liste
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
    // if(nature === null) {
    //   return;
    // } else if(nature.type === NatureType.Vertus) {
    //   this.personnage.vertus.push(nature);
    // } else {
    //   this.personnage.vis.push(nature);
    // }
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
