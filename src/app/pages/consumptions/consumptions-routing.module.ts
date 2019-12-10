import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ConsumptionsPage } from "./consumptions.page";

const routes: Routes = [
  {
    path: '',
    component: ConsumptionsPage
  },
  {
    path: 'llamadas',
    loadChildren: () =>
      import('./childs/calls/calls.module').then(m => m.CallsPageModule)
  },
  {
    path: 'mensajes',
    loadChildren: () =>
      import('./childs/messages/messages.module').then(
        m => m.MessagesPageModule
      )
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumptionsPageRoutingModule { }
