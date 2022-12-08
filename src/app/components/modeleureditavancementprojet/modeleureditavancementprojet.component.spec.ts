import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleureditavancementprojetComponent } from './modeleureditavancementprojet.component';

describe('ModeleureditavancementprojetComponent', () => {
  let component: ModeleureditavancementprojetComponent;
  let fixture: ComponentFixture<ModeleureditavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleureditavancementprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleureditavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
