import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateureditpostComponent } from './coordinateureditpost.component';

describe('CoordinateureditpostComponent', () => {
  let component: CoordinateureditpostComponent;
  let fixture: ComponentFixture<CoordinateureditpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateureditpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateureditpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
