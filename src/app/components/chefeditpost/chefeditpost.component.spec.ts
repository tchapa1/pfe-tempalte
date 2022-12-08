import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefeditpostComponent } from './chefeditpost.component';

describe('ChefeditpostComponent', () => {
  let component: ChefeditpostComponent;
  let fixture: ComponentFixture<ChefeditpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefeditpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefeditpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
