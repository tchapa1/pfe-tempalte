import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleureditavancementtacheComponent } from './modeleureditavancementtache.component';

describe('ModeleureditavancementtacheComponent', () => {
  let component: ModeleureditavancementtacheComponent;
  let fixture: ComponentFixture<ModeleureditavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleureditavancementtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleureditavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
