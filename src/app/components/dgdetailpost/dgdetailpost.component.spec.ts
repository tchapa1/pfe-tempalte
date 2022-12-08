import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgdetailpostComponent } from './dgdetailpost.component';

describe('DgdetailpostComponent', () => {
  let component: DgdetailpostComponent;
  let fixture: ComponentFixture<DgdetailpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgdetailpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgdetailpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
