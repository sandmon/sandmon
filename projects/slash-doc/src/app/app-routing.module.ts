import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DocumentComponent} from 'projects/slash-doc/src/app/document.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentComponent
  },
  {
    path: 'components/form',
    loadChildren: () => import('./form/form.module').then(m => m.FormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
