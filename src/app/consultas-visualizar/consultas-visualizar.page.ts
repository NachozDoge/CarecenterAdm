import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Consulta } from '../model/consulta';
import { ConsultaService } from '../services/consulta.service';

@Component({
  selector: 'app-consultas-visualizar',
  templateUrl: './consultas-visualizar.page.html',
  styleUrls: ['./consultas-visualizar.page.scss'],
})
export class ConsultasVisualizarPage implements OnInit {


  consulta : Consulta = new Consulta();

  constructor(private consultaServ : ConsultaService,
    private route: ActivatedRoute,
    private navCtrl : NavController) { }

  ngOnInit() {

    this.route.paramMap.subscribe(url=>{
      let id = url.get('id');
      
      this.consultaServ.buscaPorId(id).subscribe(response=>{
        this.consulta = response;
        
      })

    })

  }

  atualizar(){
    this.navCtrl.navigateForward(['/exame-atualizar',this.consulta.id]);
  }

  excluir(){
    this.navCtrl.navigateForward(['/clientes-excluir',this.consulta.id]);
  }

}