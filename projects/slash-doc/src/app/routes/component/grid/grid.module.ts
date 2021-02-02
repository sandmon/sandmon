import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridComponent} from './grid.component';
import {DocumentModule} from 'projects/slash-doc/src/components/doc/document.module';
import {RouterModule} from '@angular/router';
import {NSGridModule} from 'projects/slash-ui/src/components/grid/grid.module';
import {NSDemoGridBasicComponent} from 'projects/slash-ui/src/components/grid/demo/basic.component';
import {NSContainerModule} from 'projects/slash-ui/src/components/container/container.module';
import {NSDemoGridOrderComponent} from 'projects/slash-ui/src/components/grid/demo/order.component';


@NgModule({
  declarations: [
    GridComponent,
    NSDemoGridBasicComponent,
    NSDemoGridOrderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GridComponent
      }
    ]),
    NSGridModule,
    DocumentModule,
    NSContainerModule
  ]
})
export class GridModule {
}
