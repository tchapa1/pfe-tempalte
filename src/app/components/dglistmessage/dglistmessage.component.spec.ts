import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DglistmessageComponent } from './dglistmessage.component';

describe('DglistmessageComponent', () => {
  let component: DglistmessageComponent;
  let fixture: ComponentFixture<DglistmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DglistmessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DglistmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
