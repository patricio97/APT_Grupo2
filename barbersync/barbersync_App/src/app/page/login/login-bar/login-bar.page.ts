import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-bar',
  templateUrl: './login-bar.page.html',
  styleUrls: ['./login-bar.page.scss'],
})
export class LoginBarPage {
  correo: string = ''; // Cambia 'usuario' a 'correo'
  contrasena: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  iniciarSesion() {
    const loginExitoso = this.authService.loginBarbero(this.correo, this.contrasena);
    if (loginExitoso) {
      this.router.navigate(['/perfil-barbero']);
      alert('Inicio de sesión exitoso como barbero.');
    } else {
      alert('Credenciales incorrectas o acceso no permitido para clientes en este portal.');
    }
  }
}
