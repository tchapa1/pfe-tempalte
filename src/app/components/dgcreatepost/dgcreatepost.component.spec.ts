import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgcreatepostComponent } from './dgcreatepost.component';

describe('DgcreatepostComponent', () => {
  let component: DgcreatepostComponent;
  let fixture: ComponentFixture<DgcreatepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcreatepostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcreatepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
