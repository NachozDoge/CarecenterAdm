import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Exame } from '../model/exame';
import { exameService } from '../services/exame.service';


@Component({
  selector: 'app-medico-exames',
  templateUrl: './medico-exames.page.html',
  styleUrls: ['./medico-exames.page.scss'],
})
export class MedicoExamesPage implements OnInit {

  @ViewChild("sangue") sangue; 

  lista : Exame[] = [];

  constructor(private exameServ : exameService,
    private navCtrl : NavController) { }

  ngOnInit() {
    this.exameServ.listaDeExame().subscribe(response=>{
      // O servidor respondeu
      
      this.lista = response;
     

      
    },err=>{
      // erro
    })
  }

  visualizar(id){
    this.navCtrl.navigateForward(['/exame-visualizar',id])
  }

  agendar(id){
    this.navCtrl.navigateForward(['/agendar-exame',id])
  }

  pesquisar(){
    console.log("Busca por: "+this.sangue.value)
    this.exameServ.buscaPorEspecialidade(this.sangue.value).subscribe(response=>{
      this.lista = [];
      this.lista = response;
    });
  }
  

}
