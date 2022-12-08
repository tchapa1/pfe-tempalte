import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurcreatemessageComponent } from './modeleurcreatemessage.component';

describe('ModeleurcreatemessageComponent', () => {
  let component: ModeleurcreatemessageComponent;
  let fixture: ComponentFixture<ModeleurcreatemessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurcreatemessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurcreatemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
