import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Exame } from '../model/exame';
import { exameService } from '../services/exame.service';
@Component({
  selector: 'app-exames-marcados',
  templateUrl: './exames-marcados.page.html',
  styleUrls: ['./exames-marcados.page.scss'],
})
export class ExamesMarcadosPage implements OnInit {

  @ViewChild("nome") nome; 

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

  visualizar(sangue){
    this.navCtrl.navigateForward(['/exame-visualizar',sangue])
  }

  pesquisar(){
    console.log("Busca por: "+this.nome.value)
    this.exameServ.buscaPorNome(this.nome.value).subscribe(response=>{
      this.lista = [];
      this.lista = response;
    });
  }
  

}