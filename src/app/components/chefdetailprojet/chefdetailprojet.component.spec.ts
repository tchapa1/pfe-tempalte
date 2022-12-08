import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdetailprojetComponent } from './chefdetailprojet.component';

describe('ChefdetailprojetComponent', () => {
  let component: ChefdetailprojetComponent;
  let fixture: ComponentFixture<ChefdetailprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefdetailprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdetailprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
