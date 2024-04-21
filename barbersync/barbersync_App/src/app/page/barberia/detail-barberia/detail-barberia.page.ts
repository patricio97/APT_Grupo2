import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceBarberriaService } from 'src/app/services/service-barberria.service';

@Component({
  selector: 'app-detail-barberia',
  templateUrl: './detail-barberia.page.html',
  styleUrls: ['./detail-barberia.page.scss'],
})
export class DetailBarberiaPage {

  barberia = {
    id: "",
    nombre: "",
    direccion: "",
    horario: ""
  }

  constructor(private barberiaServ:ServiceBarberriaService, private router:Router) { }

  ionViewWillEnter(){
    this.getBarberiaByID(this.getIdFromURL())
  }

  getIdFromURL(){
    let url = this.router.url
    let arr = url.split("/",3)
    let id = parseInt(arr[2])
    return id
  }

  getBarberiaByID(barberiaID:number){
    this.barberiaServ.getBarberiaByID(barberiaID).subscribe(
      (resp:any) => {
        this.barberia = {
          id:resp[0].id,
          nombre:resp[0].nombre,
          direccion:resp[0].direccion,
          horario:resp[0].horario
        }
      }
    )
  }

}