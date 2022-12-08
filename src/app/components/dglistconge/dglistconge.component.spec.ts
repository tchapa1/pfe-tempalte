import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DglistcongeComponent } from './dglistconge.component';

describe('DglistcongeComponent', () => {
  let component: DglistcongeComponent;
  let fixture: ComponentFixture<DglistcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DglistcongeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DglistcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
