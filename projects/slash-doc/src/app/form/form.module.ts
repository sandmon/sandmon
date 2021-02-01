import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormComponent} from 'projects/slash-doc/src/app/form/form.component';
import {NsDemoBasicInputComponent} from 'projects/slash-ui/src/components/input/demo/basic/basic.component';
import {RouterModule} from '@angular/router';
import {NSInputModule} from 'projects/slash-ui/src/components/input';


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
