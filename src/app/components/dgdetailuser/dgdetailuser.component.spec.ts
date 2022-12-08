import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgdetailuserComponent } from './dgdetailuser.component';

describe('DgdetailuserComponent', () => {
  let component: DgdetailuserComponent;
  let fixture: ComponentFixture<DgdetailuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgdetailuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgdetailuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
