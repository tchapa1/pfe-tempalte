import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RheditmessageComponent } from './rheditmessage.component';

describe('RheditmessageComponent', () => {
  let component: RheditmessageComponent;
  let fixture: ComponentFixture<RheditmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RheditmessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RheditmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
