import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

import { CadastroPerfilPage } from '../cadastro-perfil/cadastro-perfil.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router,
    private menuCtrl : MenuController) {
  }

  ngOnInit() {
  }
 

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

goToPage() {
 
}

public createAccount() {
  return this.router.navigateByUrl('/cadastro-perfil');
}

  
}
