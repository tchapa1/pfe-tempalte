import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdetailpostComponent } from './chefdetailpost.component';

describe('ChefdetailpostComponent', () => {
  let component: ChefdetailpostComponent;
  let fixture: ComponentFixture<ChefdetailpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefdetailpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdetailpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
