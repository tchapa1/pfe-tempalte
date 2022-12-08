import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgcreatenotificationComponent } from './dgcreatenotification.component';

describe('DgcreatenotificationComponent', () => {
  let component: DgcreatenotificationComponent;
  let fixture: ComponentFixture<DgcreatenotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcreatenotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcreatenotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
