import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyadminviewComponent } from './lazyadminview.component';

describe('LazyadminviewComponent', () => {
  let component: LazyadminviewComponent;
  let fixture: ComponentFixture<LazyadminviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyadminviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyadminviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
