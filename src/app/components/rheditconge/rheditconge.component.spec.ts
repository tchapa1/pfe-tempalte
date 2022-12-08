import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RheditcongeComponent } from './rheditconge.component';

describe('RheditcongeComponent', () => {
  let component: RheditcongeComponent;
  let fixture: ComponentFixture<RheditcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RheditcongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RheditcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
