import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TemplateService } from '../service/template';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private template: TemplateService,
    private clienteServ: ClienteService
  ) {
    this.iniciarForm();
  }

  ngOnInit() {
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
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

      this.clienteServ.cadastrar(this.formGroup.value).subscribe(response => {
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
