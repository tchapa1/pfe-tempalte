import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgdetailtacheComponent } from './dgdetailtache.component';

describe('DgdetailtacheComponent', () => {
  let component: DgdetailtacheComponent;
  let fixture: ComponentFixture<DgdetailtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgdetailtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgdetailtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
