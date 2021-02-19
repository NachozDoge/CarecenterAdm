import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarMedicoPageRoutingModule } from './cadastrar-medico-routing.module';

import { CadastrarMedicoPage } from './cadastrar-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CadastrarMedicoPageRoutingModule
  ],
  declarations: [CadastrarMedicoPage]
})
export class CadastrarMedicoPageModule {}
