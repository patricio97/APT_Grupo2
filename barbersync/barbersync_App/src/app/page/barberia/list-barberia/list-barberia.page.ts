import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { ServiceBarberriaService } from 'src/app/services/service-barberria.service';

@Component({
  selector: 'app-list-barberia',
  templateUrl: './list-barberia.page.html',
  styleUrls: ['./list-barberia.page.scss'],
})
export class ListBarberiaPage {

  barberias = []

  constructor(private barberiaSer:ServiceBarberriaService, private loadingCrt:LoadingController) { }

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

    this.barberiaSer.listarBarberias().subscribe(
      (resp) => {
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.barberias = JSON.parse(listString)
        event?.target.complete();
      },
      (err) => {
        console.log(err.message);
      }
    )
  }
}
