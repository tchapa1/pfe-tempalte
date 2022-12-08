import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhcreatepostComponent } from './rhcreatepost.component';

describe('RhcreatepostComponent', () => {
  let component: RhcreatepostComponent;
  let fixture: ComponentFixture<RhcreatepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhcreatepostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhcreatepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
