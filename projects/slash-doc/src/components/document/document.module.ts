import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DocumentComponent, ExampleComponentDirective} from 'projects/slash-doc/src/components/document/document.component';
import {ExampleModule} from 'projects/slash-doc/src/components/example/example.module';


@NgModule({
  declarations: [DocumentComponent, ExampleComponentDirective],
  exports: [
    DocumentComponent
  ],
  imports: [
    CommonModule,
    ExampleModule
  ]
})
export class DocumentModule {
}
