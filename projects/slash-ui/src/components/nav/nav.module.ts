import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NSNavComponent} from 'projects/slash-ui/src/components/nav/nav.component';


@NgModule({
  declarations: [NSNavComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NSNavComponent,
  ]
})
export class NSNavModule {
}
