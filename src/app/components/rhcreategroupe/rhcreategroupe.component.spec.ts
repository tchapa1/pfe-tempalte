import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhcreategroupeComponent } from './rhcreategroupe.component';

describe('RhcreategroupeComponent', () => {
  let component: RhcreategroupeComponent;
  let fixture: ComponentFixture<RhcreategroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhcreategroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhcreategroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
