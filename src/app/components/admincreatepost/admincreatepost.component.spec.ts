import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreatepostComponent } from './admincreatepost.component';

describe('AdmincreatepostComponent', () => {
  let component: AdmincreatepostComponent;
  let fixture: ComponentFixture<AdmincreatepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincreatepostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincreatepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
