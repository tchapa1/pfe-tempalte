import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhlistprojetComponent } from './rhlistprojet.component';

describe('RhlistprojetComponent', () => {
  let component: RhlistprojetComponent;
  let fixture: ComponentFixture<RhlistprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhlistprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhlistprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
