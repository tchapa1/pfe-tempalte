import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurdetailavancementtacheComponent } from './modeleurdetailavancementtache.component';

describe('ModeleurdetailavancementtacheComponent', () => {
  let component: ModeleurdetailavancementtacheComponent;
  let fixture: ComponentFixture<ModeleurdetailavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurdetailavancementtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurdetailavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
