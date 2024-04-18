import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Barberias', url: 'list-barberia', icon: 'storefront' },
  ];

  constructor(private router: Router) {}

  cerrarSesion() {
    // Lógica para cerrar sesión
    // Por ejemplo, limpiar el token de autenticación almacenado
    localStorage.removeItem('token');
    // Redirigir al usuario a la página de inicio de sesión
    // Aquí se utiliza el enrutador para navegar a la ruta '/login'
    this.router.navigate(['/login']);
  }
}
