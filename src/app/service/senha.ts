import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
  })
  export class senhaService {
    constructor(private http: HttpClient,
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController) { }

        loading = this.loadingCtrl.create({
            cssClass: 'my-custom-class',
            message: 'Carregando...',
            duration: 2000
          });

          myAlert(texto){
            let alert = this.alertCtrl.create({
              cssClass: 'my-custom-class',
              header: 'Mensagem',
              subHeader: '',
              message: 'E-mail enviado com sucesso',
              buttons: ['OK']
            });
            alert.then(data=>{
              data.present();
            })
          }
  }