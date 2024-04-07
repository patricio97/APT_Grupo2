import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'login-barbero',
    loadChildren: () => import('./login-barbero/login-barbero.module').then( m => m.LoginBarberoPageModule)
  },
  {
    path: 'registro-barbero',
    loadChildren: () => import('./registro-barbero/registro-barbero.module').then( m => m.RegistroBarberoPageModule)
  },
  {
    path: 'login-cliente',
    loadChildren: () => import('./login-cliente/login-cliente.module').then( m => m.LoginClientePageModule)
  },
  {
    path: 'registro-cliente',
    loadChildren: () => import('./registro-cliente/registro-cliente.module').then( m => m.RegistroClientePageModule)
  },
  {
    path: 'home1',
    loadChildren: () => import('./home1/home1.module').then( m => m.Home1PageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'registro-cli',
    loadChildren: () => import('./page/registro/registro-cli/registro-cli.module').then( m => m.RegistroCliPageModule)
  },
  {
    path: 'registro-bar',
    loadChildren: () => import('./page/registro/registro-bar/registro-bar.module').then( m => m.RegistroBarPageModule)
  },
  {
    path: 'login-cli',
    loadChildren: () => import('./page/login/login-cli/login-cli.module').then( m => m.LoginCliPageModule)
  },
  {
    path: 'login-bar',
    loadChildren: () => import('./page/login/login-bar/login-bar.module').then( m => m.LoginBarPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./page/intro/intro.module').then( m => m.IntroPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
