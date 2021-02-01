import {Component, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DocumentComponent} from 'projects/slash-doc/src/app/routes/document.component';
import {ComponentComponent} from 'projects/slash-doc/src/app/routes/component.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentComponent
  },
  {
    path: 'components',
    component: ComponentComponent,
    children: [
      {
        path: 'form',
        loadChildren: () => import('./routes/component/form/form.module').then(m => m.FormModule)
      },
      {
        path: 'input',
        loadChildren: () => import('./routes/component/input/input.module').then(m => m.InputModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
