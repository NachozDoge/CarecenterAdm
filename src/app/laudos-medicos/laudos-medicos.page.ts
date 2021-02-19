import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-laudos-medicos',
  templateUrl: './laudos-medicos.page.html',
  styleUrls: ['./laudos-medicos.page.scss'],
})
export class LaudosMedicosPage implements OnInit {

  constructor(
    private menuCtrl : MenuController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

}