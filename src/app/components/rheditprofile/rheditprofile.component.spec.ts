import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RheditprofileComponent } from './rheditprofile.component';

describe('RheditprofileComponent', () => {
  let component: RheditprofileComponent;
  let fixture: ComponentFixture<RheditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RheditprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RheditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
