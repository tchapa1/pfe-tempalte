import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminacceuilComponent } from './adminacceuil.component';

describe('AdminacceuilComponent', () => {
  let component: AdminacceuilComponent;
  let fixture: ComponentFixture<AdminacceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminacceuilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminacceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
