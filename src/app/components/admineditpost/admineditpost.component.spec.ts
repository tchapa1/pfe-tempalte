import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditpostComponent } from './admineditpost.component';

describe('AdmineditpostComponent', () => {
  let component: AdmineditpostComponent;
  let fixture: ComponentFixture<AdmineditpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmineditpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
