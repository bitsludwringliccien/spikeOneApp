import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'consumos',
    loadChildren: () => import('./pages/consumos/consumos.module').then(m => m.ConsumosPageModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'consumos' },
  { path: '**', pathMatch: 'full', redirectTo: 'consumos' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
