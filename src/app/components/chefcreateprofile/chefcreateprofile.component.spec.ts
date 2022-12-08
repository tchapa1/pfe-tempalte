import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefcreateprofileComponent } from './chefcreateprofile.component';

describe('ChefcreateprofileComponent', () => {
  let component: ChefcreateprofileComponent;
  let fixture: ComponentFixture<ChefcreateprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefcreateprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefcreateprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
