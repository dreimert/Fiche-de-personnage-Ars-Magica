import { Component, Output, EventEmitter, input } from '@angular/core';
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
export class CaracteristiquesComponent {

  public readonly caracterisques = input<Caracteristique[]>([]);

  @Output() caracterisquesChange: EventEmitter<Caracteristique[]> = new EventEmitter();

  sumField (tab: any[], field: string) {
    if(!tab) return
    return tab.reduce(function(sum, el){
      return sum + el[field];
    }, 0);
  }
}
