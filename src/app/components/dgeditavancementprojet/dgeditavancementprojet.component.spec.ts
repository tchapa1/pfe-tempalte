import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgeditavancementprojetComponent } from './dgeditavancementprojet.component';

describe('DgeditavancementprojetComponent', () => {
  let component: DgeditavancementprojetComponent;
  let fixture: ComponentFixture<DgeditavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgeditavancementprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgeditavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
