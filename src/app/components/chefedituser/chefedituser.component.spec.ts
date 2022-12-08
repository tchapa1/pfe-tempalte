import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefedituserComponent } from './chefedituser.component';

describe('ChefedituserComponent', () => {
  let component: ChefedituserComponent;
  let fixture: ComponentFixture<ChefedituserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefedituserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefedituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
