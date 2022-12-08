import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurcreatepostComponent } from './coordinateurcreatepost.component';

describe('CoordinateurcreatepostComponent', () => {
  let component: CoordinateurcreatepostComponent;
  let fixture: ComponentFixture<CoordinateurcreatepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurcreatepostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurcreatepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
