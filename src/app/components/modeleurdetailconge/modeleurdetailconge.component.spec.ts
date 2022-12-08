import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurdetailcongeComponent } from './modeleurdetailconge.component';

describe('ModeleurdetailcongeComponent', () => {
  let component: ModeleurdetailcongeComponent;
  let fixture: ComponentFixture<ModeleurdetailcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurdetailcongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurdetailcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
