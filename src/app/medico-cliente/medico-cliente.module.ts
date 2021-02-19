import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicoClientePageRoutingModule } from './medico-cliente-routing.module';

import { MedicoClientePage } from './medico-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicoClientePageRoutingModule
  ],
  declarations: [MedicoClientePage]
})
export class MedicoClientePageModule {}
