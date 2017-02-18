import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Caracteristique } from '../types/Caracteristique';

@Component({
  selector: 'caracteristiques',
  templateUrl: './caracteristiques.component.html',
  styleUrls: ['./caracteristiques.component.css']
})
export class CaracteristiquesComponent implements OnInit {

  @Input()
  public caracterisques: Caracteristique[];

  @Output() caracterisquesChange: EventEmitter<Caracteristique[]> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sumField(tab, field) {
    if(!tab) return
    return tab.reduce(function(sum, el){
      return sum + el[field];
    }, 0);
  }

  // get caracterisques() {
  //   return this._caracterisques;
  // }
  //
  //
  // set caracterisques(value) {
  //   this._caracterisques = value;
  // }

}
