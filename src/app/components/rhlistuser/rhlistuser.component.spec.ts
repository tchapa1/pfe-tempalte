import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhlistuserComponent } from './rhlistuser.component';

describe('RhlistuserComponent', () => {
  let component: RhlistuserComponent;
  let fixture: ComponentFixture<RhlistuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhlistuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhlistuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
