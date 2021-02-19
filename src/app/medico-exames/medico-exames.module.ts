import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicoExamesPageRoutingModule } from './medico-exames-routing.module';

import { MedicoExamesPage } from './medico-exames.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicoExamesPageRoutingModule
  ],
  declarations: [MedicoExamesPage]
})
export class MedicoExamesPageModule {}
