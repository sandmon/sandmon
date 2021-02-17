import {Component, ElementRef, Input, OnInit} from "@angular/core";
import { toCssPixel } from '../../utils/convert';


@Component({
  selector: 'ns-sider',
  template: `
    <div class="layout-sider-children">
      <ng-content></ng-content>
    </div>
    <div
      *ngIf="nsCollapsible"
      ns-sider-trigger
      [siderWidth]="widthSetting"
    >
    </div>
  `,
  host: {
    '[class.layout-sider-light]': `nsTheme === 'light'`,
    '[class.layout-sider-dark]': `nsTheme === 'dark'`,
    '[style.width]': 'widthSetting',
    '[style.flex]': 'flexSetting',
  }
})
export class NSSiderComponent implements OnInit {

  @Input() nsWidth: string | number = 200;
  @Input() nsCollapsible: boolean = false;
  @Input() nsCollapsedWidth: string | number = 80;
  @Input() nsCollapsed: boolean = false;
  @Input() nsTheme: 'light' | 'dark' = 'dark'

  widthSetting: string | null = null;
  flexSetting: string | null = null;


  updateStyleMap(): void {
    this.widthSetting = this.nsCollapsed ? toCssPixel(this.nsCollapsedWidth) : toCssPixel(this.nsWidth);
    this.flexSetting = `0 0 ${this.widthSetting}`;
  }
  constructor(public elementRef: ElementRef) {
    this.elementRef.nativeElement.classList.add('layout-sider')
  }
  ngOnInit():void {
    this.updateStyleMap()
  }

}
