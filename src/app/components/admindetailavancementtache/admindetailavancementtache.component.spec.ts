import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindetailavancementtacheComponent } from './admindetailavancementtache.component';

describe('AdmindetailavancementtacheComponent', () => {
  let component: AdmindetailavancementtacheComponent;
  let fixture: ComponentFixture<AdmindetailavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindetailavancementtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindetailavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
