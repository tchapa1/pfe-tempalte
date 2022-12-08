import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheflistnotificationComponent } from './cheflistnotification.component';

describe('CheflistnotificationComponent', () => {
  let component: CheflistnotificationComponent;
  let fixture: ComponentFixture<CheflistnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheflistnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheflistnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
