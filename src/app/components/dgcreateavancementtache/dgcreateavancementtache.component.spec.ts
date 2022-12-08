import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgcreateavancementtacheComponent } from './dgcreateavancementtache.component';

describe('DgcreateavancementtacheComponent', () => {
  let component: DgcreateavancementtacheComponent;
  let fixture: ComponentFixture<DgcreateavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcreateavancementtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcreateavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
