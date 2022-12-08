import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhdetailuserComponent } from './rhdetailuser.component';

describe('RhdetailuserComponent', () => {
  let component: RhdetailuserComponent;
  let fixture: ComponentFixture<RhdetailuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhdetailuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhdetailuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
