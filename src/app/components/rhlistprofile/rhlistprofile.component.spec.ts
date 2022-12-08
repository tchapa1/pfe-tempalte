import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhlistprofileComponent } from './rhlistprofile.component';

describe('RhlistprofileComponent', () => {
  let component: RhlistprofileComponent;
  let fixture: ComponentFixture<RhlistprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhlistprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhlistprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
