import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'; // Importa 'map' desde 'rxjs/operators'
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000'; // Ruta base del servidor JSON Server

  constructor(private http: HttpClient, private router: Router) { }

  registrarCliente(clienteData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/clientes`, clienteData).pipe(
      catchError(error => {
        throw new Error('Error al registrar el cliente.');
      }),
      map(() => {
        this.router.navigate(['/login-cli']);
        alert('Registro exitoso. Bienvenido a nuestra comunidad como cliente!');
        return null;
      })
    );
  }

  registrarBarbero(barberoData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/barberos`, barberoData).pipe(
      catchError(error => {
        throw new Error('Error al registrar el barbero.');
      }),
      map(() => {
        this.router.navigate(['/login-bar']);
        alert('Registro exitoso. Bienvenido a la comunidad de barberos!');
        return null;
      })
    );
  }

  loginCliente(correo: string, password: string): Observable<boolean> {
    return this.http.post<any[]>(`${environment.apiUrl}/clientes/login`, { correo, password }).pipe(
      map(clientes => clientes.length > 0), // Utiliza 'map' para transformar la respuesta en un booleano
      catchError(error => {
        throw new Error('Error al iniciar sesión como cliente.');
      })
    );
  }

  loginBarbero(correo: string, password: string): Observable<boolean> {
    return this.http.post<any[]>(`${environment.apiUrl}/barberos/login`, { correo, password }).pipe(
      map(barberos => barberos.length > 0), // Utiliza 'map' para transformar la respuesta en un booleano
      catchError(error => {
        throw new Error('Error al iniciar sesión como barbero.');
      })
    );
  }

  validarClave(clave: string): boolean {
    return clave.length >= 6;
  }

  validarCorreo(correo: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    return regex.test(correo);
  }
}
