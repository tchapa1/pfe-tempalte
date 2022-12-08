import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgeditavancementtacheComponent } from './dgeditavancementtache.component';

describe('DgeditavancementtacheComponent', () => {
  let component: DgeditavancementtacheComponent;
  let fixture: ComponentFixture<DgeditavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgeditavancementtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgeditavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
