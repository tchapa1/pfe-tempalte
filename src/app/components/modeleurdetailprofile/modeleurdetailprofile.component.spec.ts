import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurdetailprofileComponent } from './modeleurdetailprofile.component';

describe('ModeleurdetailprofileComponent', () => {
  let component: ModeleurdetailprofileComponent;
  let fixture: ComponentFixture<ModeleurdetailprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurdetailprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurdetailprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
