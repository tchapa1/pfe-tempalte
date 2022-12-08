import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindetailavancementprojetComponent } from './admindetailavancementprojet.component';

describe('AdmindetailavancementprojetComponent', () => {
  let component: AdmindetailavancementprojetComponent;
  let fixture: ComponentFixture<AdmindetailavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindetailavancementprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindetailavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
