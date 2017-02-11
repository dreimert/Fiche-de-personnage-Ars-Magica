import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Caracterisque } from '../types/Caracterisque';

@Component({
  selector: 'caracteristiques',
  templateUrl: './caracteristiques.component.html',
  styleUrls: ['./caracteristiques.component.css']
})
export class CaracteristiquesComponent implements OnInit {

  @Input()
  public caracterisques: Caracterisque[];

  @Output() caracterisquesChange: EventEmitter<Caracterisque[]> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sumField(tab, field) {
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
