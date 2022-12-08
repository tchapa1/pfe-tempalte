import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdetailmessageComponent } from './chefdetailmessage.component';

describe('ChefdetailmessageComponent', () => {
  let component: ChefdetailmessageComponent;
  let fixture: ComponentFixture<ChefdetailmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefdetailmessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdetailmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
