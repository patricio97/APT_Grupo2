// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Cliente, Barbero } from 'src/app/interfaces/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginCliente(correo: string, password: string): boolean {
    const clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
    return clientes.some((cliente: Cliente) => cliente.correo === correo && cliente.password === password);
  }
  loginBarbero(correo: string, password: string): boolean {
    const barberos: Barbero[] = JSON.parse(localStorage.getItem('barberos') || '[]');
    return barberos.some((barbero: Barbero) => barbero.correo === correo && barbero.password === password);
  }

  constructor() { }

  // Funciones para clientes
  registrarCliente(clienteData: Cliente) {
    let clientes = JSON.parse(localStorage.getItem('clientes') || '[]');
    if (clientes.some((cliente: Cliente) => cliente.correo === clienteData.correo)) {
      throw new Error('Un cliente con este correo ya está registrado.');
    }
    if (!this.validarClave(clienteData.password)) {
      throw new Error('La contraseña no cumple con los requisitos de seguridad.');
    }
    if (!this.validarCorreo(clienteData.correo)) {
      throw new Error('El formato del correo electrónico es incorrecto.');
    }
    clientes.push(clienteData);
    localStorage.setItem('clientes', JSON.stringify(clientes));
  }

  // Funciones para barberos
  registrarBarbero(barberoData: Barbero) {
    let barberos = JSON.parse(localStorage.getItem('barberos') || '[]');
    if (barberos.some((barbero: Barbero) => barbero.correo === barberoData.correo)) {
      throw new Error('Un barbero con este correo ya está registrado.');
    }
    if (!this.validarClave(barberoData.password)) {
      throw new Error('La contraseña no cumple con los requisitos de seguridad.');
    }
    if (!this.validarCorreo(barberoData.correo)) {
      throw new Error('El formato del correo electrónico es incorrecto.');
    }
    barberos.push(barberoData);
    localStorage.setItem('barberos', JSON.stringify(barberos));
  }

  // Funciones comunes para validación
  validarClave(clave: string): boolean {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_\-])[A-Za-z\d!@#$%^&*_\-]{8,}$/;
    return regex.test(clave);
  }

  validarCorreo(correo: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    return regex.test(correo);
  }
}
