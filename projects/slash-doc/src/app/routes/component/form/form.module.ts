import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormComponent} from 'projects/slash-doc/src/app/routes/component/form/form.component';
import {RouterModule} from '@angular/router';
import {NSInputModule} from 'projects/slash-ui/src/components/input';
import {ExampleModule} from 'projects/slash-doc/src/components/example/example.module';
import {DocumentModule} from 'projects/slash-doc/src/components/doc/document.module';


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    NSInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormComponent,
      }
    ]),
    ExampleModule,
    DocumentModule
  ]
})
export class FormModule {
}
