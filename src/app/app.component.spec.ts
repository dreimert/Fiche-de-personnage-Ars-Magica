/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import 'hammerjs';

import { SelectPatternSpecifiableComponent } from './select-pattern-specifiable/select-pattern-specifiable.component';
import { CompetenceXpRowComponent } from './competence-xp-row/competence-xp-row.component';
import { CaracteristiquesComponent } from './caracteristiques/caracteristiques.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SelectPatternSpecifiableComponent,
        CompetenceXpRowComponent,
        CaracteristiquesComponent,
      ],
      imports: [
        MaterialModule.forRoot(),
        FormsModule
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Création de personnage'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Création de personnage');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Nom');
  }));
});
