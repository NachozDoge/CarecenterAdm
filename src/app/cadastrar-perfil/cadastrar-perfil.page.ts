import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CadastrarService } from '../services/cadastrar.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-cadastrar-perfil',
  templateUrl: './cadastrar-perfil.page.html',
  styleUrls: ['./cadastrar-perfil.page.scss'],
})
export class CadastrarPerfilPage implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private template: TemplateService,
    private cadastrarServ: CadastrarService
  ) {
    this.iniciarForm();
  }

  ngOnInit() {
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      foto: [],
      nome: [],
      idade: [],
      cpf: [],
      sangue: [],
      endereco: [],
      numero: [],
      cidade: [],
      estado: [],
      email: [],
      telefone: []
    })
  }

  cadastrar() {
    this.template.loading.then(load => {

      load.present();

      this.cadastrarServ.cadastrar(this.formGroup.value).subscribe(response => {
        console.log("OK");
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
