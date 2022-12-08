import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhdetailcongeComponent } from './rhdetailconge.component';

describe('RhdetailcongeComponent', () => {
  let component: RhdetailcongeComponent;
  let fixture: ComponentFixture<RhdetailcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhdetailcongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhdetailcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
