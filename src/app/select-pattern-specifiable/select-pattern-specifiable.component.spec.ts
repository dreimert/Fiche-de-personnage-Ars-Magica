/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import 'hammerjs';

import { SelectPatternSpecifiableComponent } from './select-pattern-specifiable.component';

describe('SelectPatternSpecifiableComponent', () => {
  let component: SelectPatternSpecifiableComponent;
  let fixture: ComponentFixture<SelectPatternSpecifiableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPatternSpecifiableComponent ],
      imports: [
        MaterialModule.forRoot(),
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPatternSpecifiableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
