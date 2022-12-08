import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhcreateuserComponent } from './rhcreateuser.component';

describe('RhcreateuserComponent', () => {
  let component: RhcreateuserComponent;
  let fixture: ComponentFixture<RhcreateuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhcreateuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhcreateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
