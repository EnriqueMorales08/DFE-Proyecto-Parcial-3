import { Component, Input } from '@angular/core';
import { Juego } from 'src/app/models/juego';

@Component({
  selector: 'app-listado-juegos',
  templateUrl: './listado-juegos.component.html',
  styleUrls: ['./listado-juegos.component.scss']
})
export class ListadoJuegosComponent {
 @Input() listadoJuegos:Juego[]=[];
 @Input() cargandoJuegos=false;
 rutaImagen=`../../../../assets/img/juegos/`;
}
