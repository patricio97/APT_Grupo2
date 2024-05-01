import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { BdserviceService } from 'src/app/services/bdservice.service';
import { ServiceBarberriaService } from 'src/app/services/service-barberria.service';

@Component({
  selector: 'app-list-barberia',
  templateUrl: './list-barberia.page.html',
  styleUrls: ['./list-barberia.page.scss'],
})
export class ListBarberiaPage implements OnInit {

  barberias: any;


  constructor(private barberiasServ:ServiceBarberriaService, private loadingCrt:LoadingController, private bd: BdserviceService) { }

  ionViewWillEnter(){
    this.loadbarberias()
  }

  async loadbarberias(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCrt.create({
        message: "Cargando...",
        spinner: "bubbles"
      }
    );
    await loading.present();

    this.barberiasServ.listarBarberias().subscribe(
      (resp) => {
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.barberias = JSON.parse(listString)
        event?.target.complete()
      }
    )
  }

  ngOnInit(){
    this.bd.dbState().subscribe(res=>{
      if(res){
        this.bd.fetchBarberia().subscribe(data=>{
          this.barberias = data;
        })
      }
    })
  }
}
