import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyadminlistComponent } from './lazyadminlist.component';

describe('LazyadminlistComponent', () => {
  let component: LazyadminlistComponent;
  let fixture: ComponentFixture<LazyadminlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyadminlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LazyadminlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
