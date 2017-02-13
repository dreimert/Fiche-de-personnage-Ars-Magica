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
  //   natures: [],
  //   competences: [],
  // };
  personnage = {
    type: PersonnageType.Mage,
    maison: "Bonisagus",
    maisonAvantage: [Nature.enum["Talent pour [Compétence]"].specify(Competence.enum["Théorie de la magie"])],
    natures: [
      Nature.enum["Magie de Diedne"],
      Nature.enum["Sang féerique saillant"],
      Nature.enum["Magie féerique"],
      Nature.enum["Double vue"],
      Nature.enum["Verdeur"],
      Nature.enum["Affinité pour [Art]"].specify(Art.Rego),
      Nature.enum["Talent en [Art]"].specify(Art.Rego),
      Nature.enum["Expertise magique mineure"], // : Maintient de sorts
      Nature.enum["Le Don"],
      Nature.enum["Mage hermétique"],
      Nature.enum["Sombre secret"],
      Nature.enum["Technique déficiente"], //  : Perdo
      Nature.enum["Optimisme majeur"],
      Nature.enum["Ami féerique"],
      Nature.enum["Visions" ],
      Nature.enum["Petite carrure"],
      Nature.enum["Magie étrange"]
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

  constructor() {}

  get typeModel() {
    return this.personnage.type;
  }

  set typeModel(value) {
    this.personnage.natures = [];
    this.personnage.maisonAvantage = null;
    this.personnage.maison = null;
    this.personnage.type = value;
  }

  deleteNature(v) {
    this.personnage.natures.splice(this.personnage.natures.indexOf(v), 1);
  }

  addNature(nature : Nature) {
    console.log("addNature :", nature);
    if(!nature) {
      console.log('nature is null');
    } else {
      let find = this.personnage.natures.find((n) => {
        return n.toString() === nature.toString();
      })
      if(find) {
        console.log("Vous avez déjà cette nature !");
      } else {
        this.personnage.natures.push(nature);
        this.personnage.natures.sort((a, b) => {
          let type = a.type - b.type;
          return type === 0 ? b.valeur - a.valeur : type;
        });
      }
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
