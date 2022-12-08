import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhdetailprofileComponent } from './rhdetailprofile.component';

describe('RhdetailprofileComponent', () => {
  let component: RhdetailprofileComponent;
  let fixture: ComponentFixture<RhdetailprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhdetailprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhdetailprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
