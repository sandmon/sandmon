import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './modal.component';
import {RouterModule} from '@angular/router';
import {NsDemoModalBasicInputComponent} from 'projects/slash-ui/src/components/modal/demo/basic.component';
import {NSModalModule} from 'projects/slash-ui/src/components/modal/modal.module';
import {DocumentModule} from 'projects/slash-doc/src/components/document/document.module';
import {NSButtonModule} from 'projects/slash-ui/src/components/button/button.module';


@NgModule({
  declarations: [
    ModalComponent,
    NsDemoModalBasicInputComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ModalComponent
    }]),
    NSModalModule,
    DocumentModule,
    NSButtonModule,
  ]
})
export class ModalModule {
}
