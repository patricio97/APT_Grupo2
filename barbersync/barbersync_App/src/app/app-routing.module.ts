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
    path: 'login-cliente',
    loadChildren: () => import('./login-cliente/login-cliente.module').then( m => m.LoginClientePageModule)
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
  },
  {
    path: 'add-barberia',
    loadChildren: () => import('./page/barberia/add-barberia/add-barberia.module').then( m => m.AddBarberiaPageModule)
  },
  {
    path: 'detail-barberia/:id',
    loadChildren: () => import('./page/barberia/detail-barberia/detail-barberia.module').then( m => m.DetailBarberiaPageModule)
  },
  {
    path: 'update-barberia/:id',
    loadChildren: () => import('./page/barberia/update-barberia/update-barberia.module').then( m => m.UpdateBarberiaPageModule)
  },
  {
    path: 'delet-barberia/:id',
    loadChildren: () => import('./page/barberia/delet-barberia/delet-barberia.module').then( m => m.DeletBarberiaPageModule)
  },
  {
    path: 'list-barberia',
    loadChildren: () => import('./page/barberia/list-barberia/list-barberia.module').then( m => m.ListBarberiaPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
