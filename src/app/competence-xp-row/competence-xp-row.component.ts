import { Component, OnInit, Input, Output, EventEmitter, input } from '@angular/core';

import {Xpliable} from '../types/Xpliable';
import { Competence } from '../types/Competence';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Art } from '../types/Art';

class XpHandler implements ProxyHandler<Xpliable> {
  private store = {};

  get (target: Xpliable, name: keyof Xpliable) {
    return name in target ?
      target[name] :
      target.getLabel(name);
  }

  set (target: Xpliable, name: keyof Xpliable, value: any){
    if(name in target){
      // @ts-ignore
      target[name] = value;
    }
    else {
      target.setLabel(name, value);
    }
    return true;
  }
}

@Component({
  selector: 'competence-xp-row',
  imports: [
    FormsModule,
    MatFormFieldModule, MatInputModule,
  ],
  templateUrl: './competence-xp-row.component.html',
  styleUrls: ['./competence-xp-row.component.css']
})
export class CompetenceXpRowComponent {

  @Output() competencesChange: EventEmitter<Competence[] | Art[]> = new EventEmitter();

  public readonly etapes = input<(keyof Xpliable)[]>([]);

  public proxies: Xpliable[] = [];

  sumField(tab: any[], field: string) {
    return tab.reduce(function(sum, el){
      return sum + (el[field] || 0);
    }, 0);
  }

  // TODO: Skipped for migration because:
  //  Accessor inputs cannot be migrated as they are too complex.
  @Input() set competences(competences: Competence[] | Art[]) {
    // @ts-ignore
    this.proxies = competences.map((competence) => {
      // @ts-ignore
      return new Proxy(competence, new XpHandler());
    });
  }
}
