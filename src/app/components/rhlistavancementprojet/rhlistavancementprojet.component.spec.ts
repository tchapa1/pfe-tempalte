import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhlistavancementprojetComponent } from './rhlistavancementprojet.component';

describe('RhlistavancementprojetComponent', () => {
  let component: RhlistavancementprojetComponent;
  let fixture: ComponentFixture<RhlistavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhlistavancementprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhlistavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
