import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RheditavancementtacheComponent } from './rheditavancementtache.component';

describe('RheditavancementtacheComponent', () => {
  let component: RheditavancementtacheComponent;
  let fixture: ComponentFixture<RheditavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RheditavancementtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RheditavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
