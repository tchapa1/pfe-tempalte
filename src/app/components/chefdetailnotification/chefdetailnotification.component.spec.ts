import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdetailnotificationComponent } from './chefdetailnotification.component';

describe('ChefdetailnotificationComponent', () => {
  let component: ChefdetailnotificationComponent;
  let fixture: ComponentFixture<ChefdetailnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefdetailnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdetailnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
