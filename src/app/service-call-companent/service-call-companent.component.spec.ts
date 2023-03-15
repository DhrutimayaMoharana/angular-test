import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCallCompanentComponent } from './service-call-companent.component';

describe('ServiceCallCompanentComponent', () => {
  let component: ServiceCallCompanentComponent;
  let fixture: ComponentFixture<ServiceCallCompanentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCallCompanentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCallCompanentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
