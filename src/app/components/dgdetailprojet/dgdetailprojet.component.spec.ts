import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgdetailprojetComponent } from './dgdetailprojet.component';

describe('DgdetailprojetComponent', () => {
  let component: DgdetailprojetComponent;
  let fixture: ComponentFixture<DgdetailprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgdetailprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgdetailprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
