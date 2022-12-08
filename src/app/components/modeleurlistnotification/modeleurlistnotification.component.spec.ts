import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurlistnotificationComponent } from './modeleurlistnotification.component';

describe('ModeleurlistnotificationComponent', () => {
  let component: ModeleurlistnotificationComponent;
  let fixture: ComponentFixture<ModeleurlistnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurlistnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurlistnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
