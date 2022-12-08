import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheflistpostComponent } from './cheflistpost.component';

describe('CheflistpostComponent', () => {
  let component: CheflistpostComponent;
  let fixture: ComponentFixture<CheflistpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheflistpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheflistpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
