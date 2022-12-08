import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurlistcongeComponent } from './modeleurlistconge.component';

describe('ModeleurlistcongeComponent', () => {
  let component: ModeleurlistcongeComponent;
  let fixture: ComponentFixture<ModeleurlistcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurlistcongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurlistcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
