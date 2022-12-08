import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurmenuComponent } from './modeleurmenu.component';

describe('ModeleurmenuComponent', () => {
  let component: ModeleurmenuComponent;
  let fixture: ComponentFixture<ModeleurmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
