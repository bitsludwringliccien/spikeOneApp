import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumosPage } from './consumos.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumosPage
  },
  {
    path: 'llamadas',
    loadChildren: () => import('./childs/llamadas/llamadas.module').then(m => m.LlamadasPageModule)
  },
  {
    path: 'mensajes',
    loadChildren: () => import('./childs/mensajes/mensajes.module').then(m => m.MensajesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumosPageRoutingModule { }
