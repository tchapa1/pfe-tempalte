import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgacceuilComponent } from './dgacceuil.component';

describe('DgacceuilComponent', () => {
  let component: DgacceuilComponent;
  let fixture: ComponentFixture<DgacceuilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgacceuilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgacceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
