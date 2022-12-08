import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhfooterComponent } from './rhfooter.component';

describe('RhfooterComponent', () => {
  let component: RhfooterComponent;
  let fixture: ComponentFixture<RhfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
