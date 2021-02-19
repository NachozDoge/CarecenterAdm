import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Exame } from '../model/exame';
import { exameService } from '../services/exame.service';

@Component({
  selector: 'app-exame-visualizar',
  templateUrl: './exame-visualizar.page.html',
  styleUrls: ['./exame-visualizar.page.scss'],
})
export class ExameVisualizarPage implements OnInit {


  exame : Exame = new Exame();

  constructor(private exameServ : exameService,
    private route: ActivatedRoute,
    private navCtrl : NavController) { }

  ngOnInit() {

    this.route.paramMap.subscribe(url=>{
      let id = url.get('id');
      
      this.exameServ.buscaPorId(id).subscribe(response=>{
        this.exame = response;
        
      })

    })

  }

  atualizar(){
    this.navCtrl.navigateForward(['/exame-atualizar',this.exame.id]);
  }

  excluir(){
    this.navCtrl.navigateForward(['/clientes-excluir',this.exame.id]);
  }

}