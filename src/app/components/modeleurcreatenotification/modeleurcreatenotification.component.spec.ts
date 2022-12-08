import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurcreatenotificationComponent } from './modeleurcreatenotification.component';

describe('ModeleurcreatenotificationComponent', () => {
  let component: ModeleurcreatenotificationComponent;
  let fixture: ComponentFixture<ModeleurcreatenotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurcreatenotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurcreatenotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
