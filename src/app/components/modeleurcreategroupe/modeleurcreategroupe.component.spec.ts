import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurcreategroupeComponent } from './modeleurcreategroupe.component';

describe('ModeleurcreategroupeComponent', () => {
  let component: ModeleurcreategroupeComponent;
  let fixture: ComponentFixture<ModeleurcreategroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurcreategroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurcreategroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
