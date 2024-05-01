import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Region } from './region';
import { Comuna } from './comuna';
import { Barberia } from './barberia';

@Injectable({
  providedIn: 'root'
})
export class BdserviceService {
  //variable de conexion a BD
  public database!: SQLiteObject;

  //variables de creación de tablas
  tablaRegion: string = "CREATE TABLE IF NOT EXISTS region(idregion INTEGER PRIMARY KEY autoincrement, nombreregion VARCHAR(30) NOT NULL);";
  tablaComuna: string = "CREATE TABLE IF NOT EXISTS comuna(idcomuna INTEGER PRIMARY KEY autoincrement, nombrecomuna VARCHAR(40) NOT NULL, fkidregion INTEGER, FOREIGN KEY(fkidregion) REFERENCES region(idregion));";
  tablaBarberia: string = "CREATE TABLE IF NOT EXISTS barberia(idbarberia INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(100), direccion VARCHAR(255), telefono VARCHAR(15), fkidcomuna INTEGER, FOREIGN KEY(fkidcomuna) REFERENCES comuna(idcomuna));";

  //observables para cada consulta
  listaRegion = new BehaviorSubject([]);
  listaComuna = new BehaviorSubject([]);
  listaBarberia = new BehaviorSubject([]);

  //observable para la BD
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);



  constructor(private sqlite: SQLite, private platform: Platform, private alertController: AlertController) { 
    this.crearBD()
  }

  dbState() {
    return this.isDBReady.asObservable();
  }

  fetchRegion(): Observable<Region[]> {
    return this.listaRegion.asObservable();
  }
  fetchComuna(): Observable<Comuna[]> {
    return this.listaRegion.asObservable();
  }
  fetchBarberia(): Observable<Barberia[]> {
    return this.listaRegion.asObservable();
  }


  async presentAlert(msj:string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  crearBD(){
    //verificar la plataforma
    this.platform.ready().then(()=>{
      //crear la BD
      this.sqlite.create({
        name: 'barberia.db',
        location: 'default'
      }).then((db:SQLiteObject) =>{
        this.database = db;
        //llamamos a la funcion que crea las tablas
      })
    }).catch(e =>{
      this.presentAlert("Error en BD:" + e);
    })

  }

  async crearTablas(){
    try{
      //ejecuto creacion de tablas
      await this.database.executeSql(this.tablaRegion, []);
      await this.database.executeSql(this.tablaComuna, []);
      await this.database.executeSql(this.tablaBarberia, []);
      this.buscarBarberia();
      this.isDBReady.next(true);



    }catch(e){
      this.presentAlert("Error en Tablas:" + e)
    }
  }


  //metodos de consultas sql en la BD
  buscarBarberia(){
    return this.database.executeSql('SELECT * FROM barberia', []).then(res=>{
      //creo mi variable de almacenamiento vacia
      let items: Barberia[] = [];
      //verifico si trajo registros la consulta
      if(res.rows.length > 0){
        for (var i=0; i<res.rows.length; i++){
          items.push({
            idbarberia : res.rows.item(i).idbarberia,
            nombre : res.rows.item(i).nombre,
            direccion : res.rows.item(i).direccion,
            telefono : res.rows.item(i).telefono,
            fkidcomuna : res.rows.item(i).fkidcomuna,
          })
        }
        this.listaBarberia.next(items as any);
      }
    })
  }

  insertBarberia(nombre:string, direccion:string, telefono:string, comuna:number){
    return this.database.executeSql('INSERT INTO barberia(nombre,direccion,telefono,fkidcomuna) VALUES(?,?,?,?)',[nombre,direccion,telefono,comuna]).then(res=>{
      this.presentAlert("Barberia Registrada");
    })
  }

  modificarBarberia(idbarberia:number, nombre:string, direccion:string, telefono:string, comuna:number){
    return this.database.executeSql('UPDATE barberia SET nombre = ?, direccion = ?, telefono = ?, fkidcomuna = ? WHERE idbarberia = ?', [nombre,direccion,telefono,comuna,idbarberia]).then(res=>{
      this.presentAlert("Barberia Actualizada");
    })
  }

  eliminarBarberia(idbarberia:number){
    return this.database.executeSql('DELETE FROM barberia WHERE idbarberia = ?',[idbarberia]).then(res=>{
      this.presentAlert("Barberia Eliminada");
    })
  }
}
