import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgdetailavancementtacheComponent } from './dgdetailavancementtache.component';

describe('DgdetailavancementtacheComponent', () => {
  let component: DgdetailavancementtacheComponent;
  let fixture: ComponentFixture<DgdetailavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgdetailavancementtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgdetailavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
