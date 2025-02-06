import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
export class CompetenceXpRowComponent implements OnInit {

  private _competences: Competence[] = [];
  @Output() competencesChange: EventEmitter<Competence[] | Art[]> = new EventEmitter();

  @Input()
  public etapes: (keyof Xpliable)[] = [];

  public proxies: Xpliable[] = [];

  constructor() { }

  ngOnInit() {
  }

  sumField(tab: any[], field: string) {
    return tab.reduce(function(sum, el){
      return sum + el[field];
    }, 0);
  }

  @Input() set competences(competences: Competence[] | Art[]) {
    // @ts-ignore
    this.proxies = competences.map((competence) => {
      // @ts-ignore
      return new Proxy(competence, new XpHandler());
    });
  }
}
