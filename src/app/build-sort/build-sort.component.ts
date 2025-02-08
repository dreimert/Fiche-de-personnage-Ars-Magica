import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Portee, Duree, Cible, Sort } from '../types/Sort';
import { ArtType } from '../types/Enum';
import { Art } from '../types/Art';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

class SortHandler implements ProxyHandler<BuildSortComponent> {
  set(target: BuildSortComponent, name: keyof typeof BuildSortComponent, value: any){
    if(name in target){
      target[name] = value;
      target.generate();
      return true;
    }
    else {
      console.log("unkown property");
      return false;
    }
  }
}

@Component({
  selector: 'build-sort',
  imports: [
    FormsModule,
    MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatRadioModule,
  ],
  templateUrl: './build-sort.component.html',
  styleUrls: ['./build-sort.component.css']
})
export class BuildSortComponent {

  @Output() sortChange: EventEmitter<Sort> = new EventEmitter();

  public name!: string;
  public technique?: Art;
  public forme?: Art;
  public base?: number;
  public portee?: Portee;
  public duree?: Duree;
  public cible?: Cible;
  public modificateur?: number;
  public description?: string;
  public complements?: Art[];

  public proxy;
  public _sort: Sort | null = null;

  readonly techniques = Art.liste.filter(art => art.type === ArtType.Technique);
  readonly formes = Art.liste.filter(art => art.type === ArtType.Forme);
  readonly arts = Art.liste;
  readonly portees = Portee.liste;
  readonly durees = Duree.liste;
  readonly cibles = Cible.liste;

  constructor() {
    this.reset();
    this.proxy = new Proxy(this, new SortHandler());
    this.generate();
  }

  // TODO: Skipped for migration because:
  //  Accessor inputs cannot be migrated as they are too complex.
  @Input()
  set sort(sort: Sort) {
    if(!sort) {
      this.reset();
      //this.generate();
    } else if(this._sort !== sort) {
      this._sort = sort;
      this.name = sort.name;
      this.technique = sort.technique;
      this.forme = sort.forme;
      this.base = sort.base;
      this.portee = sort.portee;
      this.duree = sort.duree;
      this.cible = sort.cible;
      this.modificateur = sort.modificateur;
      this.description = sort.description;
      this.complements = sort.complements;
    }
  }

  generate() {
    this._sort = new Sort(
      this.name,
      this.technique,
      this.forme,
      this.base,
      this.portee,
      this.duree,
      this.cible,
      this.modificateur,
      this.description,
      this.complements,
    )
    this.sortChange.emit(this._sort);
  }

  reset() {
    this.name = "Lèvres de velours";
    this.technique = Art.Muto;
    this.forme = Art.Imaginem;
    this.base = 1;
    this.portee = Portee.Personnel;
    this.duree = Duree.Momentane;
    this.cible = Cible.Individu;
    this.modificateur = 0;
    this.description = "Pendant quelques secondes vous avez l'impression que vos lèvres sont les plus douces au monde.";
    this.complements = [];
  }

}
