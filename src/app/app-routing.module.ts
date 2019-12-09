import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'consumptions' },
  // { path: '**', pathMatch: 'full', redirectTo: 'consumptions' },
  {
    path: 'consumos',
    loadChildren: () => import('./pages/consumptions/consumptions.module').then( m => m.ConsumptionsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
