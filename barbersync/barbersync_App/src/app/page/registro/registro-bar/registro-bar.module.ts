
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroBarPageRoutingModule } from './registro-bar-routing.module';
import { RegistroBarComponent } from './registro-bar.page';
import { FuncionesRegistroService } from 'src/app/services/registro-funciones/funciones-registro.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroBarPageRoutingModule
  ],
  declarations: [RegistroBarComponent],
  providers: [FuncionesRegistroService]
})
export class RegistroBarPageModule {}
