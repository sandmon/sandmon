import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {NS_COLOR} from 'projects/slash-ui/src/types';

@Directive({
  selector: '[ns-button]'
})
export class NSButtonDirective implements OnInit {

  @Input() nsType: NS_COLOR | null = 'light';

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.classList.add('btn');
    if (this.nsType) {
      this.el.nativeElement.classList.add('btn-' + this.nsType);
    }
  }

}
