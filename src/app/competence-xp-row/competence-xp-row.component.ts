import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Competence } from '../types/Competence';

class XpHandler implements ProxyHandler<Competence> {
  private store = {};

  get(target, name){
      return name in target?
          target[name] :
          this.store[name] || 0;
  }

  set(target, name, value){
      if(name in target){
        target[name] = value;
      }
      else {
        this.store[name] = value;
        target.xp = Object.keys(this.store).reduce(((acc, key) => acc + this.store[key]), 0);
      }
      return true;
  }
}

@Component({
  selector: 'competence-xp-row',
  templateUrl: './competence-xp-row.component.html',
  styleUrls: ['./competence-xp-row.component.css']
})
export class CompetenceXpRowComponent implements OnInit {

  private _competences: Competence[];
  @Output() competencesChange: EventEmitter<Competence[]> = new EventEmitter();

  @Input()
  public etapes: string[] = [];

  public proxies = [];

  constructor() { }

  ngOnInit() {
  }

  sumField(tab, field) {
    return tab.reduce(function(sum, el){
      return sum + el[field];
    }, 0);
  }

  @Input()
  set competences(competences: Competence[]){
    this.proxies = competences.map((competence) => {
      let proxy = this.proxies.find((proxy) => proxy.name === competence.name);

      if(proxy) {
        return proxy;
      } else {
        return new Proxy(competence, new XpHandler());
      }
    });
  }
}
