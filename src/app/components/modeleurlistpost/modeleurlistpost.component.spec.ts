import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurlistpostComponent } from './modeleurlistpost.component';

describe('ModeleurlistpostComponent', () => {
  let component: ModeleurlistpostComponent;
  let fixture: ComponentFixture<ModeleurlistpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurlistpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurlistpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
