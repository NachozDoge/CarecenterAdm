import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { TemplateService } from '../service/template';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(
    private menuCtrl : MenuController,
    private auth : AngularFireAuth,
    private router: Router,
    private template : TemplateService,
    private navCtrl:NavController,
    private menu: NavController,

    ) {
    this.ionViewWillEnter();
   }

  ngOnInit() {
  }

  private Logar() {
    this.router.navigateByUrl('/login');
   }

  cadastro(){
    this.template.loading.then(load=>{
      load.present ();
      this.auth.createUserWithEmailAndPassword(this.username.value, this.password.value).then(response=>{
        load.dismiss();
        this.template.myAlert("Cadastrado com sucesso ");
      this.navCtrl.navigateForward(['/login'])
    }).catch(err=>{
        this.template.myAlert("Dados incorretos");
    })
  })
}
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
}