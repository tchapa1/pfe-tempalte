import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurcreateprofileComponent } from './modeleurcreateprofile.component';

describe('ModeleurcreateprofileComponent', () => {
  let component: ModeleurcreateprofileComponent;
  let fixture: ComponentFixture<ModeleurcreateprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurcreateprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurcreateprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
