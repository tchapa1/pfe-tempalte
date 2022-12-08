import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurdetailgroupeComponent } from './coordinateurdetailgroupe.component';

describe('CoordinateurdetailgroupeComponent', () => {
  let component: CoordinateurdetailgroupeComponent;
  let fixture: ComponentFixture<CoordinateurdetailgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurdetailgroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurdetailgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
