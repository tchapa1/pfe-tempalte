import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhlistgroupeComponent } from './rhlistgroupe.component';

describe('RhlistgroupeComponent', () => {
  let component: RhlistgroupeComponent;
  let fixture: ComponentFixture<RhlistgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhlistgroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhlistgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
