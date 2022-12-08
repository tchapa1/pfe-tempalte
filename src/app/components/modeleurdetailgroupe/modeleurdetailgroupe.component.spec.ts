import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleurdetailgroupeComponent } from './modeleurdetailgroupe.component';

describe('ModeleurdetailgroupeComponent', () => {
  let component: ModeleurdetailgroupeComponent;
  let fixture: ComponentFixture<ModeleurdetailgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleurdetailgroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleurdetailgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
