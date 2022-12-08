import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheflistprofileComponent } from './cheflistprofile.component';

describe('CheflistprofileComponent', () => {
  let component: CheflistprofileComponent;
  let fixture: ComponentFixture<CheflistprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheflistprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheflistprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
