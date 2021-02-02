import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContainerComponent} from './container.component';
import {RouterModule} from '@angular/router';
import {NSDemoContainerBasicComponent} from 'projects/lib/src/components/container/demo/basic.component';
import {DocumentModule} from 'projects/site/src/app/components/document/document.module';


@NgModule({
  declarations: [ContainerComponent, NSDemoContainerBasicComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContainerComponent,
      }
    ]),
    DocumentModule
  ]
})
export class ContainerModule {
}
