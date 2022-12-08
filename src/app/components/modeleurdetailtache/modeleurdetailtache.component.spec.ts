import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurdetailtacheComponent } from './modeleurdetailtache.component';

describe('ModeleurdetailtacheComponent', () => {
  let component: ModeleurdetailtacheComponent;
  let fixture: ComponentFixture<ModeleurdetailtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurdetailtacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurdetailtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
