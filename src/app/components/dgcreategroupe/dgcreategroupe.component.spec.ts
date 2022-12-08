import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgcreategroupeComponent } from './dgcreategroupe.component';

describe('DgcreategroupeComponent', () => {
  let component: DgcreategroupeComponent;
  let fixture: ComponentFixture<DgcreategroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcreategroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcreategroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
