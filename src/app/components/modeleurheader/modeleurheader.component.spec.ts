import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurheaderComponent } from './modeleurheader.component';

describe('ModeleurheaderComponent', () => {
  let component: ModeleurheaderComponent;
  let fixture: ComponentFixture<ModeleurheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
