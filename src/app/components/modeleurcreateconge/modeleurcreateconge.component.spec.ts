import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurcreatecongeComponent } from './modeleurcreateconge.component';

describe('ModeleurcreatecongeComponent', () => {
  let component: ModeleurcreatecongeComponent;
  let fixture: ComponentFixture<ModeleurcreatecongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurcreatecongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurcreatecongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
