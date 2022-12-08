import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgmenuComponent } from './dgmenu.component';

describe('DgmenuComponent', () => {
  let component: DgmenuComponent;
  let fixture: ComponentFixture<DgmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
