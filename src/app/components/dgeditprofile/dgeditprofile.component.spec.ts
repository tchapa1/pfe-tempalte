import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgeditprofileComponent } from './dgeditprofile.component';

describe('DgeditprofileComponent', () => {
  let component: DgeditprofileComponent;
  let fixture: ComponentFixture<DgeditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgeditprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgeditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
