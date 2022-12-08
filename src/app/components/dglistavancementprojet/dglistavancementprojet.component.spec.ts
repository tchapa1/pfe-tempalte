import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DglistavancementprojetComponent } from './dglistavancementprojet.component';

describe('DglistavancementprojetComponent', () => {
  let component: DglistavancementprojetComponent;
  let fixture: ComponentFixture<DglistavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DglistavancementprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DglistavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
