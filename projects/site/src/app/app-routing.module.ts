import {Component, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DocumentComponent} from 'projects/site/src/app/routes/document.component';
import {ComponentComponent} from 'projects/site/src/app/routes/component.component';

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
        path: 'container',
        loadChildren: () => import('./routes/component/container/container.module').then(m => m.ContainerModule)
      },
      {
        path: 'grid',
        loadChildren: () => import('./routes/component/grid/grid.module').then(m => m.GridModule)
      },
      {
        path: 'form',
        loadChildren: () => import('./routes/component/form/form.module').then(m => m.FormModule)
      },
      {
        path: 'input',
        loadChildren: () => import('./routes/component/input/input.module').then(m => m.InputModule)
      },
      {
        path: 'modal',
        loadChildren: () => import('./routes/component/modal/modal.module').then(m => m.ModalModule)
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