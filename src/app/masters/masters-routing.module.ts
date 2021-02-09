import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterListComponent } from './master-list/master-list.component';

const routes: Routes = [
  {
    path: '',
    component: MasterListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MastersRoutingModule { }
