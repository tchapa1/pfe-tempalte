import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaffectationgroupeComponent } from './listaffectationgroupe.component';

describe('ListaffectationgroupeComponent', () => {
  let component: ListaffectationgroupeComponent;
  let fixture: ComponentFixture<ListaffectationgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaffectationgroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaffectationgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
