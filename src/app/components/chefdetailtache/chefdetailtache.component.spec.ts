import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdetailtacheComponent } from './chefdetailtache.component';

describe('ChefdetailtacheComponent', () => {
  let component: ChefdetailtacheComponent;
  let fixture: ComponentFixture<ChefdetailtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefdetailtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdetailtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
