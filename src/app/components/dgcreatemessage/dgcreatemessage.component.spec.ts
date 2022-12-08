import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgcreatemessageComponent } from './dgcreatemessage.component';

describe('DgcreatemessageComponent', () => {
  let component: DgcreatemessageComponent;
  let fixture: ComponentFixture<DgcreatemessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcreatemessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcreatemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
