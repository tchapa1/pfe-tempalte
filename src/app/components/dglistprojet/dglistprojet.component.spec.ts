import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DglistprojetComponent } from './dglistprojet.component';

describe('DglistprojetComponent', () => {
  let component: DglistprojetComponent;
  let fixture: ComponentFixture<DglistprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DglistprojetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DglistprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
