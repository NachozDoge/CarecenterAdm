import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { NavController } from '@ionic/angular';
import { Perfil } from '../model/perfil';
import { senhaService } from '../service/senha';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.page.html',
  styleUrls: ['./redefinir-senha.page.scss'],
})
export class RedefinirSenhaPage implements OnInit {
  formGroup: any;
  
  @ViewChild("id") id; 

  cliente : Perfil = new Perfil();

  constructor(private clienteService : ClienteService,
    private auth: AngularFireAuth,
    private navCtrl : NavController,
    private senha : senhaService,
    private formBuilder: FormBuilder,) {
    }

  ngOnInit() {
  }


  atualizar(){
    this.senha.myAlert("Atualizado com sucesso");
    // alert('Atualizado com sucesso')
     
   }
  }
