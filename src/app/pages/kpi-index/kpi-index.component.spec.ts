import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiIndexComponent } from './kpi-index.component';

describe('KpiIndexComponent', () => {
  let component: KpiIndexComponent;
  let fixture: ComponentFixture<KpiIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpiIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
