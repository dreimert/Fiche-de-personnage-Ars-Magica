import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Maison } from '../types/Maison';

import { natures } from '../datas/natures';
import { maisonAvantages as avantages, exMiscellaneaNature, jerbitonNature } from '../datas/maisonAvantages';

import { enumToListe } from '../utiles/enumToListe';

@Component({
  selector: 'select-maison',
  templateUrl: './select-maison.component.html',
  styleUrls: ['./select-maison.component.css']
})
export class SelectMaisonComponent implements OnInit {
  private _maison = null;
  private _avantagesSelected = [];

  @Output() maisonChange: EventEmitter<string> = new EventEmitter();
  @Output() avantagesChange: EventEmitter<any> = new EventEmitter();

  public readonly maisons = enumToListe(Maison);
  public readonly avantages = avantages;

  public readonly listVhm = natures.filter(exMiscellaneaNature.mineur.include, exMiscellaneaNature.mineur);
  public readonly listVnhm = natures
                             .filter(exMiscellaneaNature.majeur.est.include, exMiscellaneaNature.majeur.est)
                             .filter(exMiscellaneaNature.majeur.nestpas.exclude, exMiscellaneaNature.majeur.nestpas);
  public readonly listVihm = natures.filter(exMiscellaneaNature.vis.include, exMiscellaneaNature.vis);

  public readonly listVm = natures.filter(jerbitonNature.vertus.include, jerbitonNature.vertus);

  constructor() {
  }

  ngOnInit() {

  }

  @Input()
  get maison() {
    return this._maison;
  }

  set maison(value) {
    this._maison = value;
    this.maisonChange.emit(value);

    if(value === null) {
      return;
    }

    if(avantages[this._maison].length === 1) {
      this.avantagesSelected = this.avantages[this.maison][0].vertus;
    } else {
      this.avantagesSelected = [];
    }
  }

  get avantagesSelected() {
    return this._avantagesSelected[0];
  }

  set avantagesSelected(value) {
    if(value === null) {
      this._avantagesSelected = [];
      this.avantagesChange.emit([]);
    } else {

      this._avantagesSelected[0] = value;
      this.avantagesChange.emit([value]);
    }
  }

  @Input('avantages')
  set avantagesInput(value) {
    if(value) {
      this._avantagesSelected = value;
    } else {
      this._avantagesSelected = [];
    }
  }

  get exMajeur() {
    return this._avantagesSelected[1];
  }

  set exMajeur(value) {
    this._avantagesSelected[1] = value;
    this.avantagesChange.emit(this._avantagesSelected);
  }

  get exVis() {
    return this._avantagesSelected[2];
  }

  set exVis(value) {
    this._avantagesSelected[2] = value;
    this.avantagesChange.emit(this._avantagesSelected);
  }

}
