import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-cli',
  templateUrl: './login-cli.page.html',
  styleUrls: ['./login-cli.page.scss'],
})
export class LoginCliPage {
  correo: string = '';
  contrasena: string = '';
  mensajeError: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  iniciarSesion() {
    const loginExitoso = this.authService.loginCliente(this.correo, this.contrasena);
    if (loginExitoso) {
      this.router.navigate(['/perfil-cliente']);
    } else {
      this.mensajeError = 'Correo o contraseña incorrectos.';
    }
  }
}
