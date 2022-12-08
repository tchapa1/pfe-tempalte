import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhdetailavancementprojetComponent } from './rhdetailavancementprojet.component';

describe('RhdetailavancementprojetComponent', () => {
  let component: RhdetailavancementprojetComponent;
  let fixture: ComponentFixture<RhdetailavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhdetailavancementprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhdetailavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
