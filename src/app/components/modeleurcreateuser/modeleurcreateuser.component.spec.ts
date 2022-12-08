import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurcreateuserComponent } from './modeleurcreateuser.component';

describe('ModeleurcreateuserComponent', () => {
  let component: ModeleurcreateuserComponent;
  let fixture: ComponentFixture<ModeleurcreateuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurcreateuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurcreateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
