import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurlistgroupeComponent } from './modeleurlistgroupe.component';

describe('ModeleurlistgroupeComponent', () => {
  let component: ModeleurlistgroupeComponent;
  let fixture: ComponentFixture<ModeleurlistgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurlistgroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurlistgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
