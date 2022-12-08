import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhcreatecongeComponent } from './rhcreateconge.component';

describe('RhcreatecongeComponent', () => {
  let component: RhcreatecongeComponent;
  let fixture: ComponentFixture<RhcreatecongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhcreatecongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhcreatecongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
