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
      this.authService.registrarBarbero(this.barbero);
      this.router.navigate(['/perfil-barbero']); // Asume que hay una página de perfil de barbero
      alert('Registro exitoso. Bienvenido a la comunidad de barberos!');
    } catch (error: any) {
      alert(error.message);
    }
  }
}
