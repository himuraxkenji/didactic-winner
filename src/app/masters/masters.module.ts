import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MastersRoutingModule } from './masters-routing.module';
import { MasterListComponent } from './master-list/master-list.component';


@NgModule({
  declarations: [MasterListComponent],
  imports: [
    CommonModule,
    MastersRoutingModule
  ]
})
export class MastersModule { }
