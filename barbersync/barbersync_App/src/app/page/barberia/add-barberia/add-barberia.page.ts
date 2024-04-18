import { Component, OnInit } from '@angular/core';
import { Ibarberia } from 'src/app/interfaces/ibarberia';
import { ServiceBarberriaService } from 'src/app/services/service-barberria.service';

@Component({
  selector: 'app-add-barberia',
  templateUrl: './add-barberia.page.html',
  styleUrls: ['./add-barberia.page.scss'],
})
export class AddBarberiaPage implements OnInit {

  newBarberia:Ibarberia = {
    nombre: "",
    direccion: "",
    horario: ""
  }

  constructor(private barberiaServ:ServiceBarberriaService) 
  {}

  ngOnInit() {
  }

  crearBarberia(){
    this.barberiaServ.crearBarberia(this.newBarberia).subscribe()
  }

}
