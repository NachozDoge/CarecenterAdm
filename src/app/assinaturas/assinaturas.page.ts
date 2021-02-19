import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-assinaturas',
  templateUrl: './assinaturas.page.html',
  styleUrls: ['./assinaturas.page.scss'],
})
export class AssinaturasPage implements OnInit {

  constructor(
    private menuCtrl : MenuController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

}