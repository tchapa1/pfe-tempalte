import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurcreateavancementprojetComponent } from './modeleurcreateavancementprojet.component';

describe('ModeleurcreateavancementprojetComponent', () => {
  let component: ModeleurcreateavancementprojetComponent;
  let fixture: ComponentFixture<ModeleurcreateavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurcreateavancementprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurcreateavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
