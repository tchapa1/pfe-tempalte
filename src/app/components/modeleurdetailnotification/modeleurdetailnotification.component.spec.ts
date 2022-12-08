import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurdetailnotificationComponent } from './modeleurdetailnotification.component';

describe('ModeleurdetailnotificationComponent', () => {
  let component: ModeleurdetailnotificationComponent;
  let fixture: ComponentFixture<ModeleurdetailnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurdetailnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurdetailnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
