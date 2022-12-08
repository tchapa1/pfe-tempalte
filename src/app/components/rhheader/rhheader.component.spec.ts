import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhheaderComponent } from './rhheader.component';

describe('RhheaderComponent', () => {
  let component: RhheaderComponent;
  let fixture: ComponentFixture<RhheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
