import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DglistprofileComponent } from './dglistprofile.component';

describe('DglistprofileComponent', () => {
  let component: DglistprofileComponent;
  let fixture: ComponentFixture<DglistprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DglistprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DglistprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
