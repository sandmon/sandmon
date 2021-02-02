import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[ns-col]',
  inputs: ['nsSpan']
})
export class NSColDirective implements AfterViewInit {

  @Input() nsSpan: string | number | null = null;
  @Input() nsOrder: string | number | null = null;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    if (!this.nsSpan) {
      this.el.nativeElement.classList.add('col');
    } else {
      this.el.nativeElement.classList.add('col-' + this.nsSpan);
    }
    if (this.nsOrder) {
      this.el.nativeElement.classList.add('order-' + this.nsOrder);
    }
  }
}
