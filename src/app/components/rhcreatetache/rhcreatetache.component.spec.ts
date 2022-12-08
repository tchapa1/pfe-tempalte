import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhcreatetacheComponent } from './rhcreatetache.component';

describe('RhcreatetacheComponent', () => {
  let component: RhcreatetacheComponent;
  let fixture: ComponentFixture<RhcreatetacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhcreatetacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhcreatetacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
