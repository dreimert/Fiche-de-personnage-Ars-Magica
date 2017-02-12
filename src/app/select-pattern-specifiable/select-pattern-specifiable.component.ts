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
  }

  get firstLvl() {
    return this._firstLvl;
  }

  set firstLvl(value) {
    this._firstLvl = value;
    if(!value.isSpecified()) {
      this.specialityLvlListe = value.choices();
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
    let result = this._firstLvl.clone();
    result.setSpeciality(value);
    this.selectedChange.emit(result);
  }

}
