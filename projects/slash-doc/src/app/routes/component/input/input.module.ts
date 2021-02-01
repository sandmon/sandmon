import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input.component';
import {RouterModule} from '@angular/router';
import {DocumentModule} from 'projects/slash-doc/src/components/doc/document.module';
import {NsDemoBasicInputComponent} from 'projects/slash-ui/src/components/input/demo/basic/basic.component';
import {ExampleModule} from 'projects/slash-doc/src/components/example/example.module';
import {NSInputModule} from 'projects/slash-ui/src/components/input';

@NgModule({
  declarations: [
    InputComponent,
    NsDemoBasicInputComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: InputComponent,
      }
    ]),
    NSInputModule,
    DocumentModule,
    ExampleModule
  ],
})
export class InputModule {
}
