import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurlistprojetComponent } from './modeleurlistprojet.component';

describe('ModeleurlistprojetComponent', () => {
  let component: ModeleurlistprojetComponent;
  let fixture: ComponentFixture<ModeleurlistprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurlistprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurlistprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
