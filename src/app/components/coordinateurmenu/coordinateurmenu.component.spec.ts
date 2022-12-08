import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateurmenuComponent } from './coordinateurmenu.component';

describe('CoordinateurmenuComponent', () => {
  let component: CoordinateurmenuComponent;
  let fixture: ComponentFixture<CoordinateurmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateurmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateurmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
