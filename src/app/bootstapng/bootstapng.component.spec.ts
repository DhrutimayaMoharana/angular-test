import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstapngComponent } from './bootstapng.component';

describe('BootstapngComponent', () => {
  let component: BootstapngComponent;
  let fixture: ComponentFixture<BootstapngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstapngComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstapngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
