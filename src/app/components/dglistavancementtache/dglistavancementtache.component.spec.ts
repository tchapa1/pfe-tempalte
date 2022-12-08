import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DglistavancementtacheComponent } from './dglistavancementtache.component';

describe('DglistavancementtacheComponent', () => {
  let component: DglistavancementtacheComponent;
  let fixture: ComponentFixture<DglistavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DglistavancementtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DglistavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
