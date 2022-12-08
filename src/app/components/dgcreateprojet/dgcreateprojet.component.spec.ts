import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgcreateprojetComponent } from './dgcreateprojet.component';

describe('DgcreateprojetComponent', () => {
  let component: DgcreateprojetComponent;
  let fixture: ComponentFixture<DgcreateprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcreateprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcreateprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
