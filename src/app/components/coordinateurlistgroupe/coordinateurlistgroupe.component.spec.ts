import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurlistgroupeComponent } from './coordinateurlistgroupe.component';

describe('CoordinateurlistgroupeComponent', () => {
  let component: CoordinateurlistgroupeComponent;
  let fixture: ComponentFixture<CoordinateurlistgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurlistgroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurlistgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
