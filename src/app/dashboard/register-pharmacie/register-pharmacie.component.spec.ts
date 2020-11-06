import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPharmacieComponent } from './register-pharmacie.component';

describe('RegisterPharmacieComponent', () => {
  let component: RegisterPharmacieComponent;
  let fixture: ComponentFixture<RegisterPharmacieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPharmacieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
