import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
  })
  export class appService {
    constructor(private http: HttpClient,
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController) { }

          alert(texto){
            let alert = this.alertCtrl.create({
              cssClass: 'my-custom-class',
              header: 'Mensagem',
              subHeader: '',
              message: 'Atualizado com sucesso',
              buttons: ['OK']
            });
            alert.then(data=>{
              data.present();
            })
          }
  }