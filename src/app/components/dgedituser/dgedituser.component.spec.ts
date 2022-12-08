import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgedituserComponent } from './dgedituser.component';

describe('DgedituserComponent', () => {
  let component: DgedituserComponent;
  let fixture: ComponentFixture<DgedituserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgedituserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgedituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
