import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhmenuComponent } from './rhmenu.component';

describe('RhmenuComponent', () => {
  let component: RhmenuComponent;
  let fixture: ComponentFixture<RhmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
