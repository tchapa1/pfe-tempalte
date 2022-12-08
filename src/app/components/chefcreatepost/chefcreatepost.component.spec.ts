import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefcreatepostComponent } from './chefcreatepost.component';

describe('ChefcreatepostComponent', () => {
  let component: ChefcreatepostComponent;
  let fixture: ComponentFixture<ChefcreatepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefcreatepostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefcreatepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
