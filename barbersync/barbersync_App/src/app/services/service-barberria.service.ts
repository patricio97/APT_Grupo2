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

  constructor(private http:HttpClient) { }

  listarBarberias() :Observable<InterBarberia>{
    return this.http.get<InterBarberia>(`${environment.apiUrl}/barberias`)
  }

  crearBarberia(newBarberia:Ibarberia) :Observable<Ibarberia>{
    return this.http.post<Ibarberia>(`${environment.apiUrl}/barberias`, newBarberia)
  }

  getBarberiaByID(id:number):Observable<InterBarberia>{
    
    return this.http.get<InterBarberia>(`${environment.apiUrl}/barberias/?id=${id}`)
  }

}
