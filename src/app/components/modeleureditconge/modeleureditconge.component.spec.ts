import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleureditcongeComponent } from './modeleureditconge.component';

describe('ModeleureditcongeComponent', () => {
  let component: ModeleureditcongeComponent;
  let fixture: ComponentFixture<ModeleureditcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleureditcongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleureditcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
