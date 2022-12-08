import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhlistmessageComponent } from './rhlistmessage.component';

describe('RhlistmessageComponent', () => {
  let component: RhlistmessageComponent;
  let fixture: ComponentFixture<RhlistmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhlistmessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhlistmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
