import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhcreatenotificationComponent } from './rhcreatenotification.component';

describe('RhcreatenotificationComponent', () => {
  let component: RhcreatenotificationComponent;
  let fixture: ComponentFixture<RhcreatenotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhcreatenotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhcreatenotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
