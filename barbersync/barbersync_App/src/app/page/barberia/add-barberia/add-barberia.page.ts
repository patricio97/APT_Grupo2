import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ibarberia } from 'src/app/interfaces/ibarberia';
import { ServiceBarberriaService } from 'src/app/services/service-barberria.service';

@Component({
  selector: 'app-add-barberia',
  templateUrl: './add-barberia.page.html',
  styleUrls: ['./add-barberia.page.scss'],
})
export class AddBarberiaPage {

  newBarberia:Ibarberia = {
    nombre: "",
    direccion: "",
    horario: ""
  }

  constructor(private barberiaServ:ServiceBarberriaService,private router:Router) 
  {}


  crearBarberia(){
    this.barberiaServ.crearBarberia(this.newBarberia).subscribe()
    this.router.navigateByUrl("/list-barberia")
  }

}
