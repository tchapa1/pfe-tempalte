import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgcreateuserComponent } from './dgcreateuser.component';

describe('DgcreateuserComponent', () => {
  let component: DgcreateuserComponent;
  let fixture: ComponentFixture<DgcreateuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcreateuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcreateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
