import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurlisttacheComponent } from './modeleurlisttache.component';

describe('ModeleurlisttacheComponent', () => {
  let component: ModeleurlisttacheComponent;
  let fixture: ComponentFixture<ModeleurlisttacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurlisttacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurlisttacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
