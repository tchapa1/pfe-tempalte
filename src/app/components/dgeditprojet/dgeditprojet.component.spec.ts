import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgeditprojetComponent } from './dgeditprojet.component';

describe('DgeditprojetComponent', () => {
  let component: DgeditprojetComponent;
  let fixture: ComponentFixture<DgeditprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgeditprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgeditprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
