import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurcreatetacheComponent } from './modeleurcreatetache.component';

describe('ModeleurcreatetacheComponent', () => {
  let component: ModeleurcreatetacheComponent;
  let fixture: ComponentFixture<ModeleurcreatetacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurcreatetacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurcreatetacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
