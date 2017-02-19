import { Component, OnInit } from '@angular/core';

import { Portee, Duree, Cible, Sort } from '../types/Sort';

@Component({
    selector: 'build-sort',
  templateUrl: './build-sort.component.html',
  styleUrls: ['./build-sort.component.css']
})
export class BuildSortComponent implements OnInit {

  public nbBase = 1;
  public portee = Portee.Personnel;
  public duree = Duree.Momentane;
  public cible = Cible.Individu;
  public modificateur = 0;

  readonly portees = Portee.liste;
  readonly durees = Duree.liste;
  readonly cibles = Cible.liste;

  constructor() { }

  ngOnInit() {
  }

  calcLvlSort() {
    let lvl = this.nbBase;

    let sortModif = function() {
      return lvl >= 5 ? 5 : 1;
    }

    let addValeur = (valeur: number) => {
      while(valeur > 0) {
        lvl += sortModif();
        valeur--;
      }
    }

    addValeur(this.portee.modificateur);
    addValeur(this.duree.modificateur);
    addValeur(this.cible.modificateur);
    addValeur(this.modificateur);

    return lvl;
  }

}
