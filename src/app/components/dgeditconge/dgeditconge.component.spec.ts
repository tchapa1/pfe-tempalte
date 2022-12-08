import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgeditcongeComponent } from './dgeditconge.component';

describe('DgeditcongeComponent', () => {
  let component: DgeditcongeComponent;
  let fixture: ComponentFixture<DgeditcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgeditcongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgeditcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
