import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RheditprojetComponent } from './rheditprojet.component';

describe('RheditprojetComponent', () => {
  let component: RheditprojetComponent;
  let fixture: ComponentFixture<RheditprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RheditprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RheditprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
