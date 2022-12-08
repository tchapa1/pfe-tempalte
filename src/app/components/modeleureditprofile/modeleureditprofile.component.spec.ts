import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleureditprofileComponent } from './modeleureditprofile.component';

describe('ModeleureditprofileComponent', () => {
  let component: ModeleureditprofileComponent;
  let fixture: ComponentFixture<ModeleureditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleureditprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleureditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
