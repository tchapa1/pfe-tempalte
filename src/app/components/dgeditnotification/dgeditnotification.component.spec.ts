import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgeditnotificationComponent } from './dgeditnotification.component';

describe('DgeditnotificationComponent', () => {
  let component: DgeditnotificationComponent;
  let fixture: ComponentFixture<DgeditnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgeditnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgeditnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
