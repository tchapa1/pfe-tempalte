import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurdetailpostComponent } from './modeleurdetailpost.component';

describe('ModeleurdetailpostComponent', () => {
  let component: ModeleurdetailpostComponent;
  let fixture: ComponentFixture<ModeleurdetailpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurdetailpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurdetailpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
