import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgcreatetacheComponent } from './dgcreatetache.component';

describe('DgcreatetacheComponent', () => {
  let component: DgcreatetacheComponent;
  let fixture: ComponentFixture<DgcreatetacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcreatetacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcreatetacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
