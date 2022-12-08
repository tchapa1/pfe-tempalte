import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgeditpostComponent } from './dgeditpost.component';

describe('DgeditpostComponent', () => {
  let component: DgeditpostComponent;
  let fixture: ComponentFixture<DgeditpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgeditpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgeditpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
