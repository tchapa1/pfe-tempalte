import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhcreatemessageComponent } from './rhcreatemessage.component';

describe('RhcreatemessageComponent', () => {
  let component: RhcreatemessageComponent;
  let fixture: ComponentFixture<RhcreatemessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhcreatemessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhcreatemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
