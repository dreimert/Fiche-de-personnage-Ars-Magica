import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Specifiable} from '../types/Specifiable';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

class SpecificityHandler implements ProxyHandler<SelectPatternSpecifiableComponent> {
  specificities = [];

  get (target: SelectPatternSpecifiableComponent, name: keyof SelectPatternSpecifiableComponent) {
    let i = Number(name);

    return (i < 0 || i >= target.specialityLvlListe!.length) ?
      undefined : // @ts-ignore
      this.specificities[name];
  }

  set (target: SelectPatternSpecifiableComponent, name: keyof SelectPatternSpecifiableComponent, value: any){
    let i = Number(name);
    if(i < 0 || i >= target.specialityLvlListe!.length) {
      return false;
    } else {
      // @ts-ignore
      this.specificities[name] = value;
      if(this.specificities.length === target.specialityLvlListe!.length && this.specificities.reduce((acc, specificity) => acc && specificity)) {
        target.specialityLvl = this.specificities;
      }
      return true;
    }
  }
}

@Component({
  selector: 'select-pattern-specifiable',
  imports: [
    FormsModule,
    MatFormFieldModule, MatSelectModule,
  ],
  templateUrl: './select-pattern-specifiable.component.html',
  styleUrls: ['./select-pattern-specifiable.component.css']
})
export class SelectPatternSpecifiableComponent implements OnInit {

  @Input() public liste : Specifiable<any, any>[] = [];

  @Output() selectedChange: EventEmitter<Specifiable<any, any>> = new EventEmitter();

  private _selected?: Specifiable<any, any>;
  private _firstLvl?: Specifiable<any, any>;
  private _specialityLvl?: Specifiable<any, any>[];
  public specialityLvlListe?: any[];

  public showSpecifySelect = false;

  constructor() {
    // console.log("constructor");
  }

  ngOnInit() {
    // console.log("ngOnInit");
  }

  get selected() {
    return this._selected;
  }

  @Input() set selected(value) {
    // console.log("selected");
    this._selected = value;
    if(value) {
      this.firstLvl = this.liste.find((elem) => elem.include(value)); // C'est la value de la liste qui doit inclide value
    } else {
      this._firstLvl = undefined;
      this.showSpecifySelect = false;
    }
  }

  get firstLvl() {
    return this._firstLvl;
  }

  set firstLvl(value) {
    let old = this._firstLvl;
    this._firstLvl = value;
    if(!value?.isSpecified()) {
      let choices = value?.choices();
      if(old) {
        // @ts-ignore
        this._specialityLvl = new Proxy(this, new SpecificityHandler());
      } else {
        // @ts-ignore
        this._specialityLvl = new Proxy(this, new SpecificityHandler());
      }
      if(choices?.multi) {
        this.specialityLvlListe = choices.liste;
        if(choices.liste?.length === 1 && choices.liste[0].length === 1){
          this._specialityLvl![0] = choices.liste[0][0]
        }
      } else {
        this.specialityLvlListe = [choices!.liste];
        if(choices?.liste?.length === 1){
          this._specialityLvl![0] = choices.liste[0]
        }
      }
      this.showSpecifySelect = true;

    } else if(value.isSpecifiable()) {
      let choices = value.choices();
      if(old) {
        // @ts-ignore
        this._specialityLvl = new Proxy(this, new SpecificityHandler());
      } else {
        // @ts-ignore
        this._specialityLvl = new Proxy(this, new SpecificityHandler());
      }
      if(choices.multi) {
        this.specialityLvlListe = choices.liste;
        if(choices.liste?.length === 1 && choices.liste[0].length === 1){
          this._specialityLvl![0] = choices.liste[0][0]
        }
      } else {
        this.specialityLvlListe = [choices.liste];
        if(choices.liste?.length === 1){
          this._specialityLvl![0] = choices.liste[0]
        }
      }
      this.showSpecifySelect = true;
    } else {
      this.showSpecifySelect = false;
      this.selectedChange.emit(value);
    }
  }

  get specialityLvl() {
    return this._specialityLvl;
  }

  set specialityLvl(value) {
    this._specialityLvl = value;
    let result = this._firstLvl?.specify(value);
    this.selectedChange.emit(result);
  }

}
