import { Component } from '@angular/core';
import { FuncionesLoginService } from 'src/app/services/login-funciones/funciones-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.page.html',
  styleUrls: ['./login-bar.page.scss'],
})
export class LoginBarPage {

  constructor(private funcionesLoginService: FuncionesLoginService, private router: Router) { }

  iniciarSesion(usuario: string, contraseña: string) {
    const usuarioData = { username: usuario, password: contraseña };
    const tipoUsuario = this.funcionesLoginService.autenticarUsuario(usuarioData);
    if (tipoUsuario === 'barbero') {
      // Autenticación exitosa como barbero, redirigir a la página correspondiente
      this.router.navigate(['/perfil-barbero']);
    } else if (tipoUsuario === 'cliente') {
      // Autenticación exitosa como cliente, redirigir a la página correspondiente
      this.router.navigate(['/perfil-cliente']);
    } else {
      // Credenciales incorrectas, mostrar mensaje de error
      alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
    }
  }

}
