import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurlistmessageComponent } from './modeleurlistmessage.component';

describe('ModeleurlistmessageComponent', () => {
  let component: ModeleurlistmessageComponent;
  let fixture: ComponentFixture<ModeleurlistmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurlistmessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurlistmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
