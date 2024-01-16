import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalingFeatureComponent } from './journaling-feature.component';

describe('JournalingFeatureComponent', () => {
  let component: JournalingFeatureComponent;
  let fixture: ComponentFixture<JournalingFeatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JournalingFeatureComponent]
    });
    fixture = TestBed.createComponent(JournalingFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
