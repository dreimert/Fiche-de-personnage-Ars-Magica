import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Specifiable} from '../types/Specifiable';


@Component({
  selector: 'select-pattern-specifiable',
  templateUrl: './select-pattern-specifiable.component.html',
  styleUrls: ['./select-pattern-specifiable.component.css']
})
export class SelectPatternSpecifiableComponent implements OnInit {

  @Input()
  public liste : Specifiable<any, any>[];

  @Output() selectedChange: EventEmitter<Specifiable<any, any>> = new EventEmitter();

  private _selected : Specifiable<any, any>;
  private _firstLvl : Specifiable<any, any>;
  private _specialityLvl : Specifiable<any, any>;
  public specialityLvlListe : any[];

  public showSpecifySelect = false;

  constructor() { }

  ngOnInit() {
  }

  get selected() {
    return this._selected;
  }

  @Input()
  set selected(value) {
    this._selected = value;
    if(value && value.include) {
      this._firstLvl = this.liste.find(value.include, value);
    } else {
      this._firstLvl = null;
      this.showSpecifySelect = false;
    }
  }

  get firstLvl() {
    return this._firstLvl;
  }

  set firstLvl(value) {
    let old = this._firstLvl;
    this._firstLvl = value;
    if(!value.isSpecified()) {
      this.specialityLvlListe = value.choices().liste;
      this.showSpecifySelect = true;
      if(old) {
        this._specialityLvl = null;
      }
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
    let result = this._firstLvl.specify(value);
    this.selectedChange.emit(result);
  }

}
