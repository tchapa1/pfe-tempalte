import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleuredituserComponent } from './modeleuredituser.component';

describe('ModeleuredituserComponent', () => {
  let component: ModeleuredituserComponent;
  let fixture: ComponentFixture<ModeleuredituserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleuredituserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleuredituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
