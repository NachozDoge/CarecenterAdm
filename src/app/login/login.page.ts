import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'; 
import { NavController, MenuController } from '@ionic/angular'; 
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TemplateService } from '../service/template';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {;
  formGroup : FormGroup; 
  
 
    constructor(
      private auth : AngularFireAuth,
      private navCtrl : NavController,
      private menuCtrl : MenuController,
      private router: Router,
      private formBuilder : FormBuilder,
      private template : TemplateService
     
      ) {
        this.iniciarForm();
      } 
  ngOnInit(): void {
   
  }
     
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  private Logar() {
    this.router.navigateByUrl('/home');
   }
   
   private RedefinirSenha() {
    this.router.navigateByUrl('/redefinir-senha');
   }


  public CriarConta() {
   this.router.navigateByUrl('/cadastrar');
  }

  autenticar() {
    let user = this.formGroup.controls['username'].value;
    let pass = this.formGroup.controls['password'].value;
    this.template.loading.then(load=>{
    this.auth.signInWithEmailAndPassword(user,pass).then(data=>{
    load.dismiss();
    this.menuCtrl.enable(true);
    this.navCtrl.navigateRoot(['home']); 
  }).catch(data=>{
    load.dismiss();
    this.template.myAlert("Erro ao atenticar");
    });
    })
    } 

    iniciarForm(){
      this.formGroup= this.formBuilder.group({
      username : ['',[Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(13), 
        Validators.maxLength(16)]]
      })
      }


   }