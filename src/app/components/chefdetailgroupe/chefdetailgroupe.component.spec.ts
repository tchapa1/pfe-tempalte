import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdetailgroupeComponent } from './chefdetailgroupe.component';

describe('ChefdetailgroupeComponent', () => {
  let component: ChefdetailgroupeComponent;
  let fixture: ComponentFixture<ChefdetailgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefdetailgroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdetailgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
