import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RhcreateavancementprojetComponent } from './rhcreateavancementprojet.component';

describe('RhcreateavancementprojetComponent', () => {
  let component: RhcreateavancementprojetComponent;
  let fixture: ComponentFixture<RhcreateavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RhcreateavancementprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RhcreateavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
