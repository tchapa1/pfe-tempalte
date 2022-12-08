import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgdetailmessageComponent } from './dgdetailmessage.component';

describe('DgdetailmessageComponent', () => {
  let component: DgdetailmessageComponent;
  let fixture: ComponentFixture<DgdetailmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgdetailmessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgdetailmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
