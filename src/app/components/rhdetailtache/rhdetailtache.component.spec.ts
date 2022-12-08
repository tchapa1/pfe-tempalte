import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhdetailtacheComponent } from './rhdetailtache.component';

describe('RhdetailtacheComponent', () => {
  let component: RhdetailtacheComponent;
  let fixture: ComponentFixture<RhdetailtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhdetailtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhdetailtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
