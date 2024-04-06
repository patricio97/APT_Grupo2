import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegistroBarberoPageRoutingModule } from './registro-barbero-routing.module';
import { RegistroBarberoComponent } from './registro-barbero.page';
import { FuncionesRegistroService } from '../funciones-registro.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroBarberoPageRoutingModule
  ],
  declarations: [RegistroBarberoComponent],
  providers: [FuncionesRegistroService]
})
export class RegistroBarberoPageModule {}
