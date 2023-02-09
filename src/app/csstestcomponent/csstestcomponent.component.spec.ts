import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsstestcomponentComponent } from './csstestcomponent.component';

describe('CsstestcomponentComponent', () => {
  let component: CsstestcomponentComponent;
  let fixture: ComponentFixture<CsstestcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsstestcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsstestcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
