import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhlistpostComponent } from './rhlistpost.component';

describe('RhlistpostComponent', () => {
  let component: RhlistpostComponent;
  let fixture: ComponentFixture<RhlistpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhlistpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhlistpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
