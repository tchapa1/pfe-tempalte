import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefcreateuserComponent } from './chefcreateuser.component';

describe('ChefcreateuserComponent', () => {
  let component: ChefcreateuserComponent;
  let fixture: ComponentFixture<ChefcreateuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefcreateuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefcreateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
