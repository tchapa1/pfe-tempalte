import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurdetailuserComponent } from './modeleurdetailuser.component';

describe('ModeleurdetailuserComponent', () => {
  let component: ModeleurdetailuserComponent;
  let fixture: ComponentFixture<ModeleurdetailuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurdetailuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurdetailuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
