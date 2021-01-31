import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NSInputComponent } from './input.component';

describe('InputComponent', () => {
  let component: NSInputComponent;
  let fixture: ComponentFixture<NSInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NSInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NSInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
