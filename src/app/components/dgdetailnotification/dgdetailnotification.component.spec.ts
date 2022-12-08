import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgdetailnotificationComponent } from './dgdetailnotification.component';

describe('DgdetailnotificationComponent', () => {
  let component: DgdetailnotificationComponent;
  let fixture: ComponentFixture<DgdetailnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgdetailnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgdetailnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
