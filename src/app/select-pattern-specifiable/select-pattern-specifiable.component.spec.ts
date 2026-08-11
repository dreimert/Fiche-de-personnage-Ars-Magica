import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPatternSpecifiableComponent } from './select-pattern-specifiable.component';

describe('SelectPatternSpecifiableComponent', () => {
  let component: SelectPatternSpecifiableComponent;
  let fixture: ComponentFixture<SelectPatternSpecifiableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectPatternSpecifiableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectPatternSpecifiableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the label', () => {
    fixture.componentRef.setInput('label', 'Sortilège');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-label')?.textContent).toContain('Sortilège');
  });

  it('should not show the speciality select until something is selected', () => {
    expect(component.showSpecifySelect).toBe(false);
  });
});
