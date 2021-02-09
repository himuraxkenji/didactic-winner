import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: 'pokemones',
    loadChildren: () => import('./pokemones/pokemones.module').then(m => m.PokemonesModule)
  },
  {
    path: 'masters',
    loadChildren: () => import('./masters/masters.module').then(m => m.MastersModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing:true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
