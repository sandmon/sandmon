import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NSDemoContainerBasicComponent } from 'projects/slash-ui/src/components/container/demo/basic.component';

describe('BasicComponent', () => {
  let component: NSDemoContainerBasicComponent;
  let fixture: ComponentFixture<NSDemoContainerBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NSDemoContainerBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NSDemoContainerBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
