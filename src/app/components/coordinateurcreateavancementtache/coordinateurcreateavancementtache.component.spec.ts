import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurcreateavancementtacheComponent } from './coordinateurcreateavancementtache.component';

describe('CoordinateurcreateavancementtacheComponent', () => {
  let component: CoordinateurcreateavancementtacheComponent;
  let fixture: ComponentFixture<CoordinateurcreateavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurcreateavancementtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurcreateavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
