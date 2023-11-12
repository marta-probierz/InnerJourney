import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SpinnerModalComponent } from './spinner-modal.component';

describe('SpinnerModalComponent', () => {
  let component: SpinnerModalComponent;
  let fixture: ComponentFixture<SpinnerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpinnerModalComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a mat-progress-spinner element', () => {
    const spinnerElement = fixture.nativeElement.querySelector('mat-progress-spinner');
    expect(spinnerElement).toBeTruthy();
  });

  it('should set the spinner mode to indeterminate', () => {
    const spinnerElement = fixture.nativeElement.querySelector('mat-progress-spinner');
    const modeAttribute = spinnerElement.getAttribute('mode');
    expect(modeAttribute).toBe('indeterminate');
  });

  it('should have a "spinner-modal" CSS class', () => {
    const spinnerModalElement = fixture.nativeElement.querySelector('.spinner-modal');
    expect(spinnerModalElement).toBeTruthy();
  });
  
  it('should have a "spinner" CSS class on the mat-progress-spinner', () => {
    const spinnerElement = fixture.nativeElement.querySelector('mat-progress-spinner');
    expect(spinnerElement.classList.contains('spinner')).toBeTruthy();
  });
});
