import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertComponent} from './alert.component';
import {NsDemoAlertBasicComponent} from 'projects/lib/src/components/alert/demo/basic.component';
import {NSAlertModule} from 'projects/lib/src/components/alert';
import {RouterModule} from '@angular/router';
import {DocumentModule} from 'projects/site/src/app/components/document/document.module';
import {NsDemoAlertSecondComponent} from 'projects/lib/src/components/alert/demo/second.component';


@NgModule({
  declarations: [AlertComponent, NsDemoAlertBasicComponent, NsDemoAlertSecondComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AlertComponent
      }
    ]),
    NSAlertModule,
    DocumentModule,
  ]
})
export class AlertModule {
}
