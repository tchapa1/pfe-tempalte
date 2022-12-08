import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgdetailprofileComponent } from './dgdetailprofile.component';

describe('DgdetailprofileComponent', () => {
  let component: DgdetailprofileComponent;
  let fixture: ComponentFixture<DgdetailprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgdetailprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgdetailprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
