import { HttpClient } from '@angular/common/http';
import { InterBarberia } from './../interfaces/inter-barberia';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Ibarberia } from '../interfaces/ibarberia';

@Injectable({
  providedIn: 'root'
})
export class ServiceBarberriaService {

  apiUrl: string = "http://localhost:3300";

  constructor(private http:HttpClient) { }

  listarBarberias() :Observable<InterBarberia>{
    return this.http.get<InterBarberia>(this.apiUrl +'/barberias')
  }

  crearBarberia(newBarberia:Ibarberia) :Observable<Ibarberia>{
    return this.http.post<Ibarberia>(this.apiUrl +'/barberias', newBarberia)
  }

  getBarberiaByID(id:number):Observable<InterBarberia>{
    return this.http.get<InterBarberia>(this.apiUrl +'/barberias?id=${id}')
  }

  actualizarBarberia(barberia:any):Observable<InterBarberia>{
    return this.http.put<InterBarberia>(this.apiUrl +'/barberias/' + barberia.id, barberia)
  }

  eliminarBarberia(barberia:any):Observable<InterBarberia>{
    return this.http.delete<InterBarberia>(this.apiUrl +'/barberias/' + barberia.id)
  }

}
