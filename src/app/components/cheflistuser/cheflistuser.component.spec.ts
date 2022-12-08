import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheflistuserComponent } from './cheflistuser.component';

describe('CheflistuserComponent', () => {
  let component: CheflistuserComponent;
  let fixture: ComponentFixture<CheflistuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheflistuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheflistuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
