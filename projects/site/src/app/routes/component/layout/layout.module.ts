import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {RouterModule} from '@angular/router';
import {DocumentModule} from 'projects/site/src/app/components/document/document.module';
import {NSDemoLayoutBasicComponent} from 'projects/lib/src/components/layout/demo/basic.component';
import {NSLayoutModule} from 'projects/lib/src/components/layout';



@NgModule({
  declarations: [LayoutComponent, NSDemoLayoutBasicComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent
      }
    ]),
    NSLayoutModule,
    DocumentModule,
  ]
})
export class LayoutModule { }
