import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RheditpostComponent } from './rheditpost.component';

describe('RheditpostComponent', () => {
  let component: RheditpostComponent;
  let fixture: ComponentFixture<RheditpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RheditpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RheditpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
