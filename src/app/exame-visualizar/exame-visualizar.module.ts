import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExameVisualizarPageRoutingModule } from './exame-visualizar-routing.module';

import { ExameVisualizarPage } from './exame-visualizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExameVisualizarPageRoutingModule
  ],
  declarations: [ExameVisualizarPage]
})
export class ExameVisualizarPageModule {}
