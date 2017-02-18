import { Component } from '@angular/core';

import { PersonnageType, Personnage, Mure, parseJsonPersonnage } from './types/Personnage';
import { Nature} from './types/Nature';
import { Caracteristique } from './types/Caracteristique';
import { Competence } from './types/Competence';
import { Art } from './types/Art';
import { NatureType, NatureValeur } from './types/Enum';
import { Maison } from './types/Maison';

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

  maisons = Maison.liste;
  natures = Nature.liste;
  competences = Competence.liste;

  naturesMsg : string = null;

  // personnage = {
  //   maison: null,
  //   natures: [],
  //   competences: [],
  // };
  personnage : Personnage = Mure;

  constructor() {
    this.calcNaturesMsg();
  }

  get typeModel() {
    return this.personnage.type;
  }

  set typeModel(value) {
    this.personnage.natures = [];
    this.personnage.maison = null;
    this.personnage.type = value;
  }

  private _test = null;
  get test() {
    return this._test;
  }

  set test(value) {
    console.log("test", value);
    this._test = value;
  }

  deleteNature(v) {
    this.personnage.natures.splice(this.personnage.natures.indexOf(v), 1);
    this.calcNaturesMsg();
  }

  addNature(nature : Nature) {
    if(!nature) {
      console.info('nature is null');
    } else {
      let find = this.personnage.natures.find((n) => {
        return n.toString() === nature.toString();
      })
      if(find) {
        console.info("Vous avez déjà cette nature !");
      } else {
        this.personnage.natures.push(nature);
        this.personnage.natures.sort((a, b) => {
          let type = a.type - b.type;
          return type === 0 ? b.valeur - a.valeur : type;
        });
        this.calcNaturesMsg();
      }
    }
  }

  calcNaturesMsg() {
    this.naturesMsg = null;
    let somme = 0;
    let max = 10;

    if(this.personnage.type === PersonnageType.Mage && this.personnage.maison.isSpecified()) {
      somme = -1;
    } else if(this.personnage.type === PersonnageType.Servant) {
      max = 3;
    }

    let sommes = this.personnage.natures.reduce((sommes, nature) => {
      if(nature.type === NatureType.Vertus) {
        sommes.vertus += nature.valeur;
      } else {
        sommes.vis += nature.valeur;
      }
      return sommes;
    }, {vertus: somme, vis: 0});

    if(sommes.vertus > max) {
      this.naturesMsg = `Vous en pouvez pas avoir plus de ${max} points de Vertus ou de Vis. Vous avez ${sommes.vertus} points de Vertus et ${sommes.vis} points de Vis`;
    } else if(sommes.vertus > sommes.vis) {
      this.naturesMsg = `Vous en pouvez pas avoir plus de points de Vertus que de Vis. Vous avez ${sommes.vertus} points de Vertus et ${sommes.vis} points de Vis.`;
    } else if(sommes.vertus < sommes.vis) {
      this.naturesMsg = `Il vous reste ${sommes.vis - sommes.vertus} points de Vis à compenser.`;
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

  addCompetence(competence : Competence) {
    if(!competence) {
      console.info('competence is null');
    } else {
      let find = this.personnage.competences.find((n) => {
        return n.toString() === competence.toString();
      })
      if(find) {
        console.info("Vous avez déjà cette competence !");
      } else {
        this.personnage.competences.push(competence.convertToXpliable());
        this.personnage.competences = this.personnage.competences.slice();
      }
    }
  }

  sort = {
    nbBase: 1,
    portee: 0,
    duree: 0,
    cible: 0,
    modificateurs: 0,
  }

  calcLvlSort() {
    let lvl = this.sort.nbBase;

    let sortModif = function() {
      return lvl >= 5 ? 5 : 1;
    }

    let addValeur = (valeurName: string) => {
      let valeur = this.sort[valeurName];
      while(valeur > 0) {
        lvl += sortModif();
        valeur--;
      }
    }

    addValeur("portee");
    addValeur("duree");
    addValeur("cible");
    addValeur("modificateurs");

    return lvl;
  }

  save() {
    localStorage.setItem("personnage", JSON.stringify(this.personnage));
  }

  charger() {
    this.personnage = parseJsonPersonnage(localStorage.getItem("personnage"));
  }

  export() {
    // let uriContent = "data:application/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.personnage));
    // window.open(uriContent, 'personnage.json');
    let blob = new Blob([JSON.stringify(this.personnage, null, 2)], {type : 'application/json'});
    let url = URL.createObjectURL(blob);
    // Create link.
    let a = document.createElement( "a" );
    // Set link on DOM.
    document.body.appendChild( a );
    // // Set link's visibility.
    // a.style = "display: none";
    // Set href on link.
    a.href = url;
    // Set file name on link.
    a.download = this.personnage.name || "personnage.json";
    // Trigger click of link.
    a.click();
    // Clear.
    window.URL.revokeObjectURL( url );
  }

  importer(event) {
    console.log("event.srcElement.files", event.target.files[0]);
    var reader = new FileReader();

    reader.onload = (e : any) => {
      this.personnage = parseJsonPersonnage(e.target.result);
    }

    reader.readAsText(event.target.files[0])
    //reader.readAsDataURL(event.target.files[0]);
  }
}
