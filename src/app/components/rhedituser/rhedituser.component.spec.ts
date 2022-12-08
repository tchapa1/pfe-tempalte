import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhedituserComponent } from './rhedituser.component';

describe('RhedituserComponent', () => {
  let component: RhedituserComponent;
  let fixture: ComponentFixture<RhedituserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhedituserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhedituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
