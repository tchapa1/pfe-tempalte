import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurcreateprojetComponent } from './modeleurcreateprojet.component';

describe('ModeleurcreateprojetComponent', () => {
  let component: ModeleurcreateprojetComponent;
  let fixture: ComponentFixture<ModeleurcreateprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurcreateprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurcreateprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
