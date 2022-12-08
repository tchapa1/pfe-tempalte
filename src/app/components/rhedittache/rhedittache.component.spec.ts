import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhedittacheComponent } from './rhedittache.component';

describe('RhedittacheComponent', () => {
  let component: RhedittacheComponent;
  let fixture: ComponentFixture<RhedittacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhedittacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhedittacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
