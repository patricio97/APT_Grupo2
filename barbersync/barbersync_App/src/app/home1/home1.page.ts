import { Component } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { ServiceBarberriaService } from 'src/app/services/service-barberria.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page{

  barberias = [{
    id: "",
    nombre: "",
    direccion: "",
    horario: ""
  }]


  constructor(private barberiasServ:ServiceBarberriaService, private loadingCrt:LoadingController) { }

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
}

