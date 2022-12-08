import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RheditgroupeComponent } from './rheditgroupe.component';

describe('RheditgroupeComponent', () => {
  let component: RheditgroupeComponent;
  let fixture: ComponentFixture<RheditgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RheditgroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RheditgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
