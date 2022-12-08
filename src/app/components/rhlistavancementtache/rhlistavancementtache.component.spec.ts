import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhlistavancementtacheComponent } from './rhlistavancementtache.component';

describe('RhlistavancementtacheComponent', () => {
  let component: RhlistavancementtacheComponent;
  let fixture: ComponentFixture<RhlistavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhlistavancementtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhlistavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
