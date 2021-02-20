import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Exame } from '../model/exame';
import { exameService } from '../services/exame.service';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.page.html',
  styleUrls: ['./exames.page.scss'],
})
export class ExamesPage implements OnInit {
  @ViewChild("sangue") sangue; 

  lista : Exame[] = [];

  constructor(private exameserv : exameService,
    private navCtrl : NavController) { }

  ngOnInit() {
    this.exameserv.listaDeExame().subscribe(response=>{
      // O servidor respondeu
      
      this.lista = response;
     

      
    },err=>{
      // erro
    })
  }

  visualizar(id){
    this.navCtrl.navigateForward(['/exame-visualizar',id])
  }

  pesquisar(){
    console.log("Busca por: "+this.sangue.value)
    this.exameserv.buscaPorEspecialidade(this.sangue.value).subscribe(response=>{
      this.lista = [];
      this.lista = response;
    });
  }
  

}
