import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleureditmessageComponent } from './modeleureditmessage.component';

describe('ModeleureditmessageComponent', () => {
  let component: ModeleureditmessageComponent;
  let fixture: ComponentFixture<ModeleureditmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleureditmessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleureditmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
