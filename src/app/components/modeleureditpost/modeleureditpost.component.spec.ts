import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleureditpostComponent } from './modeleureditpost.component';

describe('ModeleureditpostComponent', () => {
  let component: ModeleureditpostComponent;
  let fixture: ComponentFixture<ModeleureditpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleureditpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleureditpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
