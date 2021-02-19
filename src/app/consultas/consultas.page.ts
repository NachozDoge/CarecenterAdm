import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Consulta } from '../model/consulta';
import { ConsultaService } from '../services/consulta.service';
@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {
  
  @ViewChild("nome") nome; 

  lista : Consulta[] = [];

  constructor(private consultaServ : ConsultaService,
    private navCtrl : NavController) { }

  ngOnInit() {
    this.consultaServ.listaDeConsultas().subscribe(response=>{
      // O servidor respondeu
      
      this.lista = response;
     

      
    },err=>{
      // erro
    })
  }

  visualizar(id){
    this.navCtrl.navigateForward(['/consultas-visualizar',id])
  }

  pesquisar(){
    console.log("Busca por: "+this.nome.value)
    this.consultaServ.buscaPorEspecialidade(this.nome.value).subscribe(response=>{
      this.lista = [];
      this.lista = response;
    });
  }
  

}
