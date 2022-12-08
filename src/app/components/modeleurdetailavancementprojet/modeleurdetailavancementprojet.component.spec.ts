import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurdetailavancementprojetComponent } from './modeleurdetailavancementprojet.component';

describe('ModeleurdetailavancementprojetComponent', () => {
  let component: ModeleurdetailavancementprojetComponent;
  let fixture: ComponentFixture<ModeleurdetailavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurdetailavancementprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurdetailavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
