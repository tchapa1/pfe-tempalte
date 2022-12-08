import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DglistuserComponent } from './dglistuser.component';

describe('DglistuserComponent', () => {
  let component: DglistuserComponent;
  let fixture: ComponentFixture<DglistuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DglistuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DglistuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
