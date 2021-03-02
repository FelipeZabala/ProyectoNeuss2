import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Platillo } from '../interfaces/platillos.interface';


@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

  constructor( private http: HttpClient ) { }

  getPlatillos(): Observable<Platillo[]>{
    return this.http.get<Platillo[]>('http://localhost:3050/course');
  }

}
