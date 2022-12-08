import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhcreateavancementtacheComponent } from './rhcreateavancementtache.component';

describe('RhcreateavancementtacheComponent', () => {
  let component: RhcreateavancementtacheComponent;
  let fixture: ComponentFixture<RhcreateavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhcreateavancementtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhcreateavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
