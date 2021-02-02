import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input.component';
import {RouterModule} from '@angular/router';
import {DocumentModule} from 'projects/slash-doc/src/components/document/document.module';
import {NsDemoInputBasicComponent} from 'projects/slash-ui/src/components/input/demo/basic.component';
import {ExampleModule} from 'projects/slash-doc/src/components/example/example.module';
import {NSInputModule} from 'projects/slash-ui/src/components/input';

@NgModule({
  declarations: [
    InputComponent,
    NsDemoInputBasicComponent,
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
