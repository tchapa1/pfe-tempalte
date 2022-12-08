import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdetailuserComponent } from './chefdetailuser.component';

describe('ChefdetailuserComponent', () => {
  let component: ChefdetailuserComponent;
  let fixture: ComponentFixture<ChefdetailuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefdetailuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdetailuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
