import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurcreateavancementtacheComponent } from './modeleurcreateavancementtache.component';

describe('ModeleurcreateavancementtacheComponent', () => {
  let component: ModeleurcreateavancementtacheComponent;
  let fixture: ComponentFixture<ModeleurcreateavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurcreateavancementtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurcreateavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
