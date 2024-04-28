import { Injectable } from '@angular/core';
import { Cliente, Barbero } from 'src/app/interfaces/models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  registrarCliente(clienteData: Cliente) {
    let clientes: Cliente[] = JSON.parse(localStorage.getItem('clientes') || '[]');
    if (clientes.some(cliente => cliente.correo === clienteData.correo)) {
      throw new Error('Un cliente con este correo ya está registrado.');
    }
    if (!this.validarCorreo(clienteData.correo)) {
      throw new Error('El formato del correo electrónico es incorrecto.');
    }
    if (!this.validarClave(clienteData.password)) {
      throw new Error('La contraseña no cumple con los requisitos de seguridad.');
    }
    clientes.push(clienteData);
    localStorage.setItem('clientes', JSON.stringify(clientes));
    this.router.navigate(['/login-cli']);
    alert('Registro exitoso. Bienvenido a nuestra comunidad!');
  }

  registrarBarbero(barberoData: Barbero) {
    let barberos: Barbero[] = JSON.parse(localStorage.getItem('barberos') || '[]');
    if (barberos.some(barbero => barbero.correo === barberoData.correo)) {
      throw new Error('Un barbero con este correo ya está registrado.');
    }
    if (!this.validarCorreo(barberoData.correo)) {
      throw new Error('El formato del correo electrónico es incorrecto.');
    }
    if (!this.validarClave(barberoData.password)) {
      throw new Error('La contraseña no cumple con los requisitos de seguridad.');
    }
    barberos.push(barberoData);
    localStorage.setItem('barberos', JSON.stringify(barberos));
    this.router.navigate(['/login-bar']);
    alert('Registro exitoso. Bienvenido a la comunidad de barberos!');
  }

  loginCliente(correo: string, password: string): boolean {
    const clientes: Cliente[] = JSON.parse(localStorage.getItem('clientes') || '[]');
    const loginExitoso = clientes.some(cliente => cliente.correo === correo && cliente.password === password);
    if (loginExitoso) {
      alert('Inicio de sesión exitoso como cliente.');
    }
    return loginExitoso;
  }

  loginBarbero(correo: string, password: string): boolean {
    const barberos: Barbero[] = JSON.parse(localStorage.getItem('barberos') || '[]');
    const loginExitoso = barberos.some(barbero => barbero.correo === correo && barbero.password === password);
    if (loginExitoso) {
      alert('Inicio de sesión exitoso como barbero.');
    }
    return loginExitoso;
  }

  validarClave(clave: string): boolean {
    return clave.length >= 6;
  }

  validarCorreo(correo: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    return regex.test(correo);
  }
}
