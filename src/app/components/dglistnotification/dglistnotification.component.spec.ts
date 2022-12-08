import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DglistnotificationComponent } from './dglistnotification.component';

describe('DglistnotificationComponent', () => {
  let component: DglistnotificationComponent;
  let fixture: ComponentFixture<DglistnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DglistnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DglistnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
