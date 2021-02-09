import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonesRoutingModule } from './pokemones-routing.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';


@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    CommonModule,
    PokemonesRoutingModule
  ]
})
export class PokemonesModule { }
