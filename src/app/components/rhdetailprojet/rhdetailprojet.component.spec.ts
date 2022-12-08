import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhdetailprojetComponent } from './rhdetailprojet.component';

describe('RhdetailprojetComponent', () => {
  let component: RhdetailprojetComponent;
  let fixture: ComponentFixture<RhdetailprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhdetailprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhdetailprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
