import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';
import { Juego } from '../models/juego';
import { Observable } from 'rxjs';

const API_PATH = 'https://652e341df9afa8ef4b2832bb.mockapi.io/api/v1/';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  constructor(private http: HttpClient) {}

  getJuegosListas(): Observable<Juego[]>{
    const path = API_PATH +'Juegos';
    return this.http.get<Juego[]>(path);
  }
}
