import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgdetailavancementprojetComponent } from './dgdetailavancementprojet.component';

describe('DgdetailavancementprojetComponent', () => {
  let component: DgdetailavancementprojetComponent;
  let fixture: ComponentFixture<DgdetailavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgdetailavancementprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgdetailavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
