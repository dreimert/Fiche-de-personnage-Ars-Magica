/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import 'hammerjs';

import { BuildSortComponent } from './build-sort.component';

describe('BuildSortComponent', () => {
  let component: BuildSortComponent;
  let fixture: ComponentFixture<BuildSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildSortComponent ],
      imports: [
        MaterialModule.forRoot(),
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
