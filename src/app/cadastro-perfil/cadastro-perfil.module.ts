import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPerfilPageRoutingModule } from './cadastro-perfil-routing.module';

import { CadastroPerfilPage } from './cadastro-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPerfilPageRoutingModule
  ],
  declarations: [CadastroPerfilPage]
})
export class CadastroPerfilPageModule {}
