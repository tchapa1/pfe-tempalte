import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurfooterComponent } from './modeleurfooter.component';

describe('ModeleurfooterComponent', () => {
  let component: ModeleurfooterComponent;
  let fixture: ComponentFixture<ModeleurfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
