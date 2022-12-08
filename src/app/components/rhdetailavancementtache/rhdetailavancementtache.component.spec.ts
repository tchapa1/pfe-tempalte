import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhdetailavancementtacheComponent } from './rhdetailavancementtache.component';

describe('RhdetailavancementtacheComponent', () => {
  let component: RhdetailavancementtacheComponent;
  let fixture: ComponentFixture<RhdetailavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhdetailavancementtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhdetailavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
