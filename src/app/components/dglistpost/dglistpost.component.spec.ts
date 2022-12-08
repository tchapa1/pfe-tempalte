import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DglistpostComponent } from './dglistpost.component';

describe('DglistpostComponent', () => {
  let component: DglistpostComponent;
  let fixture: ComponentFixture<DglistpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DglistpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DglistpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
