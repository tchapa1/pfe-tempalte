import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurdetailmessageComponent } from './modeleurdetailmessage.component';

describe('ModeleurdetailmessageComponent', () => {
  let component: ModeleurdetailmessageComponent;
  let fixture: ComponentFixture<ModeleurdetailmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurdetailmessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurdetailmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
