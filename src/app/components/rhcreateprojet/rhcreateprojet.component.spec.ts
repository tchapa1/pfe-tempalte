import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhcreateprojetComponent } from './rhcreateprojet.component';

describe('RhcreateprojetComponent', () => {
  let component: RhcreateprojetComponent;
  let fixture: ComponentFixture<RhcreateprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhcreateprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhcreateprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
