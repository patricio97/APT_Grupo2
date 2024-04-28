import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { Barbero } from 'src/app/interfaces/models';

@Component({
  selector: 'app-registro-bar',
  templateUrl: './registro-bar.page.html',
  styleUrls: ['./registro-bar.page.scss'],
})
export class RegistroBarPage {
  barbero: Barbero = {
    username: '',
    correo: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  registrarBarbero() {
    try {
      if (!this.barbero.username.trim()) {
        throw new Error('Por favor, ingresa un nombre de usuario.');
      }

      this.authService.registrarBarbero(this.barbero);
      this.router.navigate(['/login-bar']); // Redirige al login de barbero
      alert('Registro exitoso. Bienvenido a la comunidad de barberos!');
    } catch (error: any) {
      alert(error.message);
    }
  }
}
