import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhcreateprofileComponent } from './rhcreateprofile.component';

describe('RhcreateprofileComponent', () => {
  let component: RhcreateprofileComponent;
  let fixture: ComponentFixture<RhcreateprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhcreateprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhcreateprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
