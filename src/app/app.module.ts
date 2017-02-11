import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'hammerjs';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SelectMaisonComponent } from './select-maison/select-maison.component';
import { CompetenceXpRowComponent } from './competence-xp-row/competence-xp-row.component';
import { CaracteristiquesComponent } from './caracteristiques/caracteristiques.component';
import { SelectPatternSpecifiableComponent } from './select-pattern-specifiable/select-pattern-specifiable.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectMaisonComponent,
    CompetenceXpRowComponent,
    CaracteristiquesComponent,
    SelectPatternSpecifiableComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
