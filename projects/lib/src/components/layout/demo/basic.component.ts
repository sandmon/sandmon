import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-basic',
  template: `
    <ns-layout>
      <ns-header>
        这是header
      </ns-header>
      <ns-layout>
        <ns-sider [nsCollapsedWidth]="100" [nsCollapsible]="true" [nsTheme]="'light'">
          这是sider
        </ns-sider>
        <ns-content>
          这是内容
        </ns-content>
      </ns-layout>
    </ns-layout>
  `,
})
export class NSDemoLayoutBasicComponent{
}
