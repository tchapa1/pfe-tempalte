import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DglistgroupeComponent } from './dglistgroupe.component';

describe('DglistgroupeComponent', () => {
  let component: DglistgroupeComponent;
  let fixture: ComponentFixture<DglistgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DglistgroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DglistgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
