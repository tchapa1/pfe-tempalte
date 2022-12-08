import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgfooterComponent } from './dgfooter.component';

describe('DgfooterComponent', () => {
  let component: DgfooterComponent;
  let fixture: ComponentFixture<DgfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
