import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicoVisualizarPageRoutingModule } from './medico-visualizar-routing.module';

import { MedicoVisualizarPage } from './medico-visualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicoVisualizarPageRoutingModule
  ],
  declarations: [MedicoVisualizarPage]
})
export class MedicoVisualizarPageModule {}
