import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdetailprofileComponent } from './chefdetailprofile.component';

describe('ChefdetailprofileComponent', () => {
  let component: ChefdetailprofileComponent;
  let fixture: ComponentFixture<ChefdetailprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefdetailprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdetailprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
