import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/models';

@Component({
  selector: 'app-registro-cli',
  templateUrl: './registro-cli.page.html',
  styleUrls: ['./registro-cli.page.scss'],
})
export class RegistroCliPage {
  cliente: Cliente = {
    correo: '',
    password: '',
    username: '' 
  };

  constructor(private authService: AuthService, private router: Router) { }

  registrarCliente() {
    try {
      if (!this.cliente.username.trim()) {
        throw new Error('Por favor, ingresa un nombre de usuario.');
      }

      this.authService.registrarCliente(this.cliente);
      this.router.navigate(['/login-cli']); // Redirige al login de cliente
      alert('Registro exitoso. ¡Bienvenido a nuestra comunidad!');
    } catch (error: any) {
      alert(error.message);
    }
  }
}
