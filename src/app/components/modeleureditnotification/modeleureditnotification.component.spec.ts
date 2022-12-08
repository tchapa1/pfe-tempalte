import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleureditnotificationComponent } from './modeleureditnotification.component';

describe('ModeleureditnotificationComponent', () => {
  let component: ModeleureditnotificationComponent;
  let fixture: ComponentFixture<ModeleureditnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleureditnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleureditnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
