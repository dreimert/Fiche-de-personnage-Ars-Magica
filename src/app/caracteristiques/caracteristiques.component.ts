import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Caracteristique } from '../types/Caracteristique';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'caracteristiques',
  imports: [
    FormsModule,
    MatSliderModule,
  ],
  templateUrl: './caracteristiques.component.html',
  styleUrls: ['./caracteristiques.component.css']
})
export class CaracteristiquesComponent implements OnInit {

  @Input() public caracterisques: Caracteristique[] = [];

  @Output() caracterisquesChange: EventEmitter<Caracteristique[]> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  sumField (tab: any[], field: string) {
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
