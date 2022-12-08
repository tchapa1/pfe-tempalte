import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgeditgroupeComponent } from './dgeditgroupe.component';

describe('DgeditgroupeComponent', () => {
  let component: DgeditgroupeComponent;
  let fixture: ComponentFixture<DgeditgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgeditgroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgeditgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
