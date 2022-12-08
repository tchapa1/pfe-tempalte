import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurlistprofileComponent } from './modeleurlistprofile.component';

describe('ModeleurlistprofileComponent', () => {
  let component: ModeleurlistprofileComponent;
  let fixture: ComponentFixture<ModeleurlistprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurlistprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurlistprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
