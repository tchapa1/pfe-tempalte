import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleuredittacheComponent } from './modeleuredittache.component';

describe('ModeleuredittacheComponent', () => {
  let component: ModeleuredittacheComponent;
  let fixture: ComponentFixture<ModeleuredittacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleuredittacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleuredittacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
