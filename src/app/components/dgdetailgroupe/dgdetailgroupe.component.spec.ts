import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgdetailgroupeComponent } from './dgdetailgroupe.component';

describe('DgdetailgroupeComponent', () => {
  let component: DgdetailgroupeComponent;
  let fixture: ComponentFixture<DgdetailgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgdetailgroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgdetailgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
