import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DglisttacheComponent } from './dglisttache.component';

describe('DglisttacheComponent', () => {
  let component: DglisttacheComponent;
  let fixture: ComponentFixture<DglisttacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DglisttacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DglisttacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
