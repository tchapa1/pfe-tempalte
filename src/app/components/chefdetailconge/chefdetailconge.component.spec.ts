import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdetailcongeComponent } from './chefdetailconge.component';

describe('ChefdetailcongeComponent', () => {
  let component: ChefdetailcongeComponent;
  let fixture: ComponentFixture<ChefdetailcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefdetailcongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdetailcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
