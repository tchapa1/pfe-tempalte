import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurlistavancementprojetComponent } from './modeleurlistavancementprojet.component';

describe('ModeleurlistavancementprojetComponent', () => {
  let component: ModeleurlistavancementprojetComponent;
  let fixture: ComponentFixture<ModeleurlistavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurlistavancementprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurlistavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
