import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AutenticacionModule } from './pages/autenticacion/autenticacion.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { InventarioModule } from './pages/inventario/inventario.module';
import { JuegosService } from './services/juegos.service';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutenticacionModule,
    DashboardModule,
    InventarioModule,
    HttpClientModule
  ],
  providers: [JuegosService],
  bootstrap: [AppComponent]
})
export class AppModule { }