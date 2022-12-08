import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgheaderComponent } from './dgheader.component';

describe('DgheaderComponent', () => {
  let component: DgheaderComponent;
  let fixture: ComponentFixture<DgheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
