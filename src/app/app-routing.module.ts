import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/dashboard/inicio/inicio.component';
import { ExploradorJuegosComponent } from './pages/inventario/explorador-juegos/explorador-juegos.component';
import { ExploradorProgresoComponent } from './pages/progreso-venta/explorador-progreso/explorador-progreso.component';
import { PaginaNoEncontradaComponent } from './pages/autenticacion/pagina-no-encontrada/pagina-no-encontrada.component';
const routes: Routes = [
  {path: 'dashboard', component:InicioComponent},
  {path: 'inventario', component: ExploradorJuegosComponent},
  {path: 'avance-venta',component:ExploradorProgresoComponent },
  {path: '',redirectTo:'/dashborad', pathMatch:'full'},
  {path: '**',component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
