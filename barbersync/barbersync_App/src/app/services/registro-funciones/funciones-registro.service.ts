import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionesRegistroService {

  constructor() { }

  registrarCliente(clienteData: any) {
    // Lógica para almacenar los datos del cliente en la base de datos local
    localStorage.setItem('cliente', JSON.stringify(clienteData));
  }

  registrarBarbero(barberoData: any) {
    // Lógica para almacenar los datos del barbero en la base de datos local
    localStorage.setItem('barbero', JSON.stringify(barberoData));
  }

  autenticarUsuario(usuarioData: any) {
    // Lógica para autenticar al usuario mediante la base de datos local
    const storedCliente = localStorage.getItem('cliente');
    const storedBarbero = localStorage.getItem('barbero');

    if (storedCliente && JSON.parse(storedCliente).username === usuarioData.username && JSON.parse(storedCliente).password === usuarioData.password) {
      return true; // Autenticación exitosa como cliente
    } else if (storedBarbero && JSON.parse(storedBarbero).username === usuarioData.username && JSON.parse(storedBarbero).password === usuarioData.password) {
      return true; // Autenticación exitosa como barbero
    } else {
      return false; // Credenciales incorrectas
    }
  }

  verificarDisponibilidadUsuario(username: string) {
    // Lógica para verificar la disponibilidad de un nombre de usuario en la base de datos local
    const storedCliente = localStorage.getItem('cliente');
    const storedBarbero = localStorage.getItem('barbero');

    if (storedCliente && JSON.parse(storedCliente).username === username) {
      return false; // El nombre de usuario ya está en uso por un cliente
    } else if (storedBarbero && JSON.parse(storedBarbero).username === username) {
      return false; // El nombre de usuario ya está en uso por un barbero
    } else {
      return true; // El nombre de usuario está disponible
    }
  }

  verificarDisponibilidadEmail(email: string) {
    // Lógica para verificar la disponibilidad de un correo electrónico en la base de datos local
    const storedCliente = localStorage.getItem('cliente');
    const storedBarbero = localStorage.getItem('barbero');

    if (storedCliente && JSON.parse(storedCliente).email === email) {
      return false; // El correo electrónico ya está en uso por un cliente
    } else if (storedBarbero && JSON.parse(storedBarbero).email === email) {
      return false; // El correo electrónico ya está en uso por un barbero
    } else {
      return true; // El correo electrónico está disponible
    }
  }

  validarClave(clave: string) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_\-])[A-Za-z\d!@#$%^&*_\-]{8,}$/;
    return regex.test(clave);
  }
  

  validarCorreo(correo: string) {
    // Validar que el correo tenga el formato adecuado
    const regex = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    return regex.test(correo);
  }
}
