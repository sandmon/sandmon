import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormComponent} from './form/form.component';
import {NsDemoBasicInputComponent} from 'projects/slash-ui/src/components/input/demo/basic/basic.component';
import {RouterModule} from '@angular/router';
import {NSInputModule} from 'slash-ui';


@NgModule({
  declarations: [FormComponent, NsDemoBasicInputComponent],
  imports: [
    CommonModule,
    NSInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormComponent,
      }
    ])
  ]
})
export class FormModule {
}
