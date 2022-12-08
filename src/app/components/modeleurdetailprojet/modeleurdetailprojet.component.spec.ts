import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurdetailprojetComponent } from './modeleurdetailprojet.component';

describe('ModeleurdetailprojetComponent', () => {
  let component: ModeleurdetailprojetComponent;
  let fixture: ComponentFixture<ModeleurdetailprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurdetailprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurdetailprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
