import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPharmacieComponent } from './sidebar-pharmacie.component';

describe('SidebarPharmacieComponent', () => {
  let component: SidebarPharmacieComponent;
  let fixture: ComponentFixture<SidebarPharmacieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarPharmacieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarPharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
