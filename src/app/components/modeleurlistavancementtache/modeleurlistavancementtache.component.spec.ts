import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurlistavancementtacheComponent } from './modeleurlistavancementtache.component';

describe('ModeleurlistavancementtacheComponent', () => {
  let component: ModeleurlistavancementtacheComponent;
  let fixture: ComponentFixture<ModeleurlistavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurlistavancementtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurlistavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
