import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPharmacieComponent } from './navbar-pharmacie.component';

describe('NavbarPharmacieComponent', () => {
  let component: NavbarPharmacieComponent;
  let fixture: ComponentFixture<NavbarPharmacieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarPharmacieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
