import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaffectationgroupeComponent } from './createaffectationgroupe.component';

describe('CreateaffectationgroupeComponent', () => {
  let component: CreateaffectationgroupeComponent;
  let fixture: ComponentFixture<CreateaffectationgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateaffectationgroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateaffectationgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
