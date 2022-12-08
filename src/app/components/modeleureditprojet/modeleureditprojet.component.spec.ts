import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleureditprojetComponent } from './modeleureditprojet.component';

describe('ModeleureditprojetComponent', () => {
  let component: ModeleureditprojetComponent;
  let fixture: ComponentFixture<ModeleureditprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleureditprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleureditprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
