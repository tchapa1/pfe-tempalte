import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgdetailcongeComponent } from './dgdetailconge.component';

describe('DgdetailcongeComponent', () => {
  let component: DgdetailcongeComponent;
  let fixture: ComponentFixture<DgdetailcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgdetailcongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgdetailcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
