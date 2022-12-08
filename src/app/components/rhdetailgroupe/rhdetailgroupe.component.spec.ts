import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhdetailgroupeComponent } from './rhdetailgroupe.component';

describe('RhdetailgroupeComponent', () => {
  let component: RhdetailgroupeComponent;
  let fixture: ComponentFixture<RhdetailgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhdetailgroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhdetailgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
