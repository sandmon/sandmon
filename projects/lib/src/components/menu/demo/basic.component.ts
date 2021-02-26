import {Component} from '@angular/core';

@Component({
  selector: 'ns-demo-basic',
  template: `
    <ul ns-menu>
      <li ns-menu-item nsDanger>这是菜单</li>
    </ul>
  `,
})
export class NSDemoMenuBasicComponent{
}
