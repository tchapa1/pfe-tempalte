import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateureditgroupeComponent } from './coordinateureditgroupe.component';

describe('CoordinateureditgroupeComponent', () => {
  let component: CoordinateureditgroupeComponent;
  let fixture: ComponentFixture<CoordinateureditgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateureditgroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateureditgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
