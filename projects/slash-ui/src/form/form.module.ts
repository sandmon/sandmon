import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSFormComponent} from './form.component';


@NgModule({
  declarations: [
    NSFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NSFormComponent,
  ]
})
export class NSFormModule {
}
