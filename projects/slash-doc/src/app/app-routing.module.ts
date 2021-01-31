import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DocumentComponent} from 'projects/slash-doc/src/app/document.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
