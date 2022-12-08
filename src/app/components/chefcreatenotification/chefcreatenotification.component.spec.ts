import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefcreatenotificationComponent } from './chefcreatenotification.component';

describe('ChefcreatenotificationComponent', () => {
  let component: ChefcreatenotificationComponent;
  let fixture: ComponentFixture<ChefcreatenotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefcreatenotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefcreatenotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
