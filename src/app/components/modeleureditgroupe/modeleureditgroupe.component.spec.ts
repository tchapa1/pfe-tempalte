import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleureditgroupeComponent } from './modeleureditgroupe.component';

describe('ModeleureditgroupeComponent', () => {
  let component: ModeleureditgroupeComponent;
  let fixture: ComponentFixture<ModeleureditgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleureditgroupeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeleureditgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
