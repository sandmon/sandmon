import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NSNavComponent } from 'projects/slash-ui/src/components/nav/nav.component';

describe('NavComponent', () => {
  let component: NSNavComponent;
  let fixture: ComponentFixture<NSNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NSNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NSNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
