import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeappComponent } from './pipeapp.component';

describe('PipeappComponent', () => {
  let component: PipeappComponent;
  let fixture: ComponentFixture<PipeappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
