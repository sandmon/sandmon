import {ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef, ViewEncapsulation} from "@angular/core";


@Component({
  selector: '[ns-sider-trigger]',
  exportAs: 'nsSiderTrigger',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngIf="isNormalTrigger">
      <ng-template [ngTemplateOutlet]="nzTrigger || defaultTrigger"></ng-template>
    </ng-container>
    <ng-template #defaultTrigger>
      <i *ngIf="!nsCollapsed" class="bi-chevron-left"></i>
      <i *ngIf="nsCollapsed" class="bi-chevron-right"></i>
    </ng-template>
  `,
  host: {
    '[class.layout-sider-trigger]': 'true',
    '[style.width]': 'siderWidth'
  }
})
export class NSSiderTriggerComponent implements OnInit {

  @Input() nsCollapsed: boolean = false;
  @Input() nzTrigger: TemplateRef<void> | undefined | null = undefined;
  @Input() nsCollapsedWidth: number | null = null;
  @Input() siderWidth: string | null = null;
  isNormalTrigger = true;

  ngOnInit():void {

  }
}
