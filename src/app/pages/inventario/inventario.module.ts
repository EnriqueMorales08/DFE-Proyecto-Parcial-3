import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalleJuegosComponent } from './detalle-juegos/detalle-juegos.component';
import { ExploradorJuegosComponent } from './explorador-juegos/explorador-juegos.component';
import { FiltroJuegosComponent } from './filtro-juegos/filtro-juegos.component';
import { ListadoJuegosComponent } from './listado-juegos/listado-juegos.component';



@NgModule({
  declarations: [
    DetalleJuegosComponent,
    ExploradorJuegosComponent,
    FiltroJuegosComponent,
    ListadoJuegosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ExploradorJuegosComponent
  ]
})
export class InventarioModule { }
