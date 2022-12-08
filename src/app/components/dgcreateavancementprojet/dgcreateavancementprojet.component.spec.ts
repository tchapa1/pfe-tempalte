import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgcreateavancementprojetComponent } from './dgcreateavancementprojet.component';

describe('DgcreateavancementprojetComponent', () => {
  let component: DgcreateavancementprojetComponent;
  let fixture: ComponentFixture<DgcreateavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgcreateavancementprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgcreateavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
