import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgcreateprofileComponent } from './dgcreateprofile.component';

describe('DgcreateprofileComponent', () => {
  let component: DgcreateprofileComponent;
  let fixture: ComponentFixture<DgcreateprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcreateprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcreateprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
