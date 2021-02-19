import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Consulta } from '../model/consulta';
import { ConsultaService } from '../services/consulta.service';

@Component({
  selector: 'app-consultas-marcadas',
  templateUrl: './consultas-marcadas.page.html',
  styleUrls: ['./consultas-marcadas.page.scss'],
})
export class ConsultasMarcadasPage implements OnInit {

  @ViewChild("id") id; 

  lista : Consulta[] = [];

  constructor(private marcarServ : ConsultaService,
    private navCtrl : NavController) { }

  ngOnInit() {
    this.marcarServ.listaDeConsultas().subscribe(response=>{
      // O servidor respondeu
      
      this.lista = response;
     

      
    },err=>{
      // erro
    })
  }

  visualizar(cliente){
    this.navCtrl.navigateForward(['/clientes-visualizar',cliente.id])
  }

  pesquisar(){
    console.log("Busca por: "+this.id.value)
    this.marcarServ.buscaPorNome(this.id.value).subscribe(response=>{
      this.lista = [];
      this.lista = response;
    });
  }
  

}
