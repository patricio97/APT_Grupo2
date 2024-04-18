  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root'
  })
  export class FuncionesLoginService {

    constructor() { }

    // Función para autenticar al usuario
    autenticarUsuario(usuarioData: any) {
      // Lógica para autenticar al usuario mediante la base de datos local
      const storedCliente = localStorage.getItem('cliente');
      const storedBarbero = localStorage.getItem('barbero');

      // Verificar si las credenciales coinciden con algún cliente almacenado
      if (storedCliente && JSON.parse(storedCliente).username === usuarioData.username && JSON.parse(storedCliente).password === usuarioData.password) {
        return 'cliente'; // Autenticación exitosa como cliente
      } 
      // Verificar si las credenciales coinciden con algún barbero almacenado
      else if (storedBarbero && JSON.parse(storedBarbero).username === usuarioData.username && JSON.parse(storedBarbero).password === usuarioData.password) {
        return 'barbero'; // Autenticación exitosa como barbero
      } 
      // Si no se encuentra ninguna coincidencia, las credenciales son incorrectas
      else {
        return null; // Credenciales incorrectas
      }
    }
  }
