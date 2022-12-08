import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgedittacheComponent } from './dgedittache.component';

describe('DgedittacheComponent', () => {
  let component: DgedittacheComponent;
  let fixture: ComponentFixture<DgedittacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgedittacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgedittacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
