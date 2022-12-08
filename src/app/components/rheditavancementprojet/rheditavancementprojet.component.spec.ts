import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RheditavancementprojetComponent } from './rheditavancementprojet.component';

describe('RheditavancementprojetComponent', () => {
  let component: RheditavancementprojetComponent;
  let fixture: ComponentFixture<RheditavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RheditavancementprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RheditavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
