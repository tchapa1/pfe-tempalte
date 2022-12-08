import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhdetailpostComponent } from './rhdetailpost.component';

describe('RhdetailpostComponent', () => {
  let component: RhdetailpostComponent;
  let fixture: ComponentFixture<RhdetailpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhdetailpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhdetailpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
