import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhlistcongeComponent } from './rhlistconge.component';

describe('RhlistcongeComponent', () => {
  let component: RhlistcongeComponent;
  let fixture: ComponentFixture<RhlistcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhlistcongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhlistcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
