import { Component, OnInit } from '@angular/core';
import { FuncionesRegistroService } from '../funciones-registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-barbero',
  templateUrl: './registro-barbero.page.html',
  styleUrls: ['./registro-barbero.page.scss'],
})
export class RegistroBarberoComponent implements OnInit {
  usuario: string = '';
  contrasena: string = '';
  repetirContrasena: string = '';
  correo: string = '';
  nombre: string = '';
  apellido: string = '';

  constructor(private funcionesRegistroService: FuncionesRegistroService, private router: Router) { }

  ngOnInit() {}

  registrarBarbero() {
    if (this.contrasena !== this.repetirContrasena) {
      alert('La contraseña y su repetición no coinciden');
      return;
    }

    // Verificar la contraseña nuevamente antes de registrar al barbero
    if (!this.funcionesRegistroService.validarClave(this.repetirContrasena)) {
      alert('La contraseña de confirmación no cumple con los requisitos mínimos');
      return;
    }

    if (!this.funcionesRegistroService.verificarDisponibilidadUsuario(this.usuario)) {
      alert('El usuario ya está en uso');
      return;
    }

    if (!this.funcionesRegistroService.verificarDisponibilidadEmail(this.correo)) {
      alert('El correo electrónico ya está en uso');
      return;
    }

    if (!this.funcionesRegistroService.validarClave(this.contrasena)) {
      alert('La contraseña no cumple con los requisitos mínimos');
      return;
    }

    if (!this.funcionesRegistroService.validarCorreo(this.correo)) {
      alert('El formato del correo electrónico no es válido');
      return;
    }

    const barberoData = {
      username: this.usuario,
      password: this.contrasena,
      email: this.correo,
      nombre: this.nombre,
      apellido: this.apellido
    };

    // Registrar barbero utilizando el servicio
    this.funcionesRegistroService.registrarBarbero(barberoData);
    
    alert('Barbero registrado exitosamente');

    // Redirigir a otra página después del registro
    this.router.navigate(['/login-barbero']);
  }
}
