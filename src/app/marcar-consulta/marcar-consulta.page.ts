import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Medico } from '../model/medico';
import { MedicoService } from '../services/medico.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Perfil } from '../model/perfil';
import { PerfilService } from '../services/perfil.service';
import { ConsultaService } from '../services/consulta.service';
import { TemplateService } from '../service/template';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-marcar-consulta',
  templateUrl: './marcar-consulta.page.html',
  styleUrls: ['./marcar-consulta.page.scss'],
})
export class MarcarConsultaPage implements OnInit {

  formGroup: FormGroup;

  medico: Medico = new Medico();
  perfil: Perfil = new Perfil();

  constructor(private formBuilder: FormBuilder,
    private template: TemplateService,
    private marcarServ: ConsultaService,
    private clienteService: ClienteService,
    private auth: AngularFireAuth,
    private medicoServ: MedicoService,
    private route: ActivatedRoute,
    private navCtrl: NavController,
  ) {
    this.iniciarForm();
  }
  ngOnInit() {

    this.auth.currentUser.then(response=>{
      
      this.clienteService.getPerfil(response.uid).subscribe(dados=>{
        
        this.perfil = dados as Perfil;
        console.log(this.perfil);

        this.route.paramMap.subscribe(url => {
          let id = url.get('id');
    
          this.medicoServ.buscaPorId(id).subscribe(response => {
            this.medico = response;
            this.iniciarForm();
      
          })
    
        })
      })
    })



  }
  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      idcliente: [this.perfil.id],
      idmedico: [this.medico.id],
      nome: [this.perfil.nome],
      nomemedico: [this.medico.nome],
      metodo: [],
      dataconsulta: [],
      especialidade: [this.medico.espc],
    })
  }
  cadastrar() {
    this.template.loading.then(load => {

      load.present();

      this.marcarServ.cadastrar(this.formGroup.value).subscribe(response => {
        console.log(this.formGroup.value);
        load.dismiss();
        this.template.myAlert(response);
      }, () => {
        console.log("Erro");
        load.dismiss();
        this.template.myAlert("Erro ao Cadastrar");
      })

    })
  }
}

