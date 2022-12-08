import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurcreatepostComponent } from './modeleurcreatepost.component';

describe('ModeleurcreatepostComponent', () => {
  let component: ModeleurcreatepostComponent;
  let fixture: ComponentFixture<ModeleurcreatepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurcreatepostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurcreatepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
