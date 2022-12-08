import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgcreatecongeComponent } from './dgcreateconge.component';

describe('DgcreatecongeComponent', () => {
  let component: DgcreatecongeComponent;
  let fixture: ComponentFixture<DgcreatecongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcreatecongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcreatecongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
