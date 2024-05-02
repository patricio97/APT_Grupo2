import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { ServiceBarberriaService } from 'src/app/services/service-barberria.service';
import { BdserviceService } from '../services/bdservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit{

  barberia: any = [
    {
    idbarberia: '',
    nombre: '',
    direccion: '',
    telefono: '',
    fkidcomuna: ''
    }
  ]


  constructor(private router: Router,private bdservice: BdserviceService) { }

  ngOnInit() {
    this.bdservice.dbState().subscribe(resp => {
      if (resp) {
        this.bdservice.fetchBarberia().subscribe( item => {
          this.barberia = item;
        })
      }
    })
  }



}

