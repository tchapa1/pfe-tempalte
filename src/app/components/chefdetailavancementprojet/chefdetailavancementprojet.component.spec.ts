import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdetailavancementprojetComponent } from './chefdetailavancementprojet.component';

describe('ChefdetailavancementprojetComponent', () => {
  let component: ChefdetailavancementprojetComponent;
  let fixture: ComponentFixture<ChefdetailavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefdetailavancementprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdetailavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
