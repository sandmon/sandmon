import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NSFormComponent } from './form.component';

describe('FormComponent', () => {
  let component: NSFormComponent;
  let fixture: ComponentFixture<NSFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NSFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NSFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
