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
      this.authService.registrarCliente(this.cliente);
      this.router.navigate(['/perfil-cliente']); // Redirige al perfil del cliente
      alert('Registro exitoso. Bienvenido a nuestra comunidad!');
    } catch (error: any) {
      alert(error.message);
    }
  }
}
