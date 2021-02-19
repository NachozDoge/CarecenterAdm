import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/providers/nav-controller';
import { Medico } from '../model/medico';
import { MedicoService } from '../services/medico.service';
@Component({
  selector: 'app-medico-cliente',
  templateUrl: './medico-cliente.page.html',
  styleUrls: ['./medico-cliente.page.scss'],
})
export class MedicoClientePage implements OnInit {
  
  @ViewChild("nome") nome; 

  lista : Medico[] = [];
  espc: any;


  constructor(private medicoServ : MedicoService,
    private navCtrl : NavController) { }

  ngOnInit() {
    this.medicoServ.listaDemedico().subscribe(response=>{
      // O servidor respondeu
      
      this.lista = response;
     

      
    },err=>{
      // erro
    })
  }

  visualizar(id){
    this.navCtrl.navigateForward(['/medico-visualizar',id])
  }

  agendar(id){
    this.navCtrl.navigateForward(['/marcar-consulta',id])
  }

  pesquisar(){
    console.log("Busca por: "+this.nome.value)
    this.medicoServ.buscaPorEspecialidade(this.nome.value).subscribe(response=>{
      this.lista = [];
      this.lista = response;
    });
  }
  

}
