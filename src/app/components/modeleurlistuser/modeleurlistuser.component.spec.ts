import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurlistuserComponent } from './modeleurlistuser.component';

describe('ModeleurlistuserComponent', () => {
  let component: ModeleurlistuserComponent;
  let fixture: ComponentFixture<ModeleurlistuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurlistuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurlistuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
