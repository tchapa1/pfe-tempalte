import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhlisttacheComponent } from './rhlisttache.component';

describe('RhlisttacheComponent', () => {
  let component: RhlisttacheComponent;
  let fixture: ComponentFixture<RhlisttacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhlisttacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhlisttacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
