import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ns-container',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() nsSize: 'default' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid' = 'fluid';

  @HostBinding('class.container') default: boolean;
  @HostBinding('class.container-sm') sm: boolean;
  @HostBinding('class.container-md') md: boolean;
  @HostBinding('class.container-lg') lg: boolean;
  @HostBinding('class.container-xl') xl: boolean;
  @HostBinding('class.container-xxl') xxl: boolean;
  @HostBinding('class.container-fluid') fluid: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.default = this.nsSize == 'default';
    this.sm = this.nsSize == 'sm';
    this.md = this.nsSize == 'md';
    this.lg = this.nsSize == 'lg';
    this.xl = this.nsSize == 'xl';
    this.xxl = this.nsSize == 'xxl';
    this.fluid = this.nsSize == 'fluid';
  }

}
