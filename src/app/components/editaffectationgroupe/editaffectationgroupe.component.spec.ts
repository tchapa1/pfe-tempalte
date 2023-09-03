import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaffectationgroupeComponent } from './editaffectationgroupe.component';

describe('EditaffectationgroupeComponent', () => {
  let component: EditaffectationgroupeComponent;
  let fixture: ComponentFixture<EditaffectationgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaffectationgroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaffectationgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
