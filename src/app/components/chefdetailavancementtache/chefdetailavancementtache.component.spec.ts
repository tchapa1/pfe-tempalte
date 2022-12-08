import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdetailavancementtacheComponent } from './chefdetailavancementtache.component';

describe('ChefdetailavancementtacheComponent', () => {
  let component: ChefdetailavancementtacheComponent;
  let fixture: ComponentFixture<ChefdetailavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefdetailavancementtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdetailavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
