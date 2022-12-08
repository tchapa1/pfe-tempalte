import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhdetailmessageComponent } from './rhdetailmessage.component';

describe('RhdetailmessageComponent', () => {
  let component: RhdetailmessageComponent;
  let fixture: ComponentFixture<RhdetailmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhdetailmessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhdetailmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
