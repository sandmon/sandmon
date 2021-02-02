import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContainerComponent} from './container.component';
import {RouterModule} from '@angular/router';
import {NSDemoContainerBasicComponent} from 'projects/slash-ui/src/components/container/demo/basic.component';
import {DocumentModule} from 'projects/slash-doc/src/components/document/document.module';


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
