import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DgeditmessageComponent } from './dgeditmessage.component';

describe('DgeditmessageComponent', () => {
  let component: DgeditmessageComponent;
  let fixture: ComponentFixture<DgeditmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DgeditmessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DgeditmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
