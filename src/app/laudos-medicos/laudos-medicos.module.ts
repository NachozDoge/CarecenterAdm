import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaudosMedicosPageRoutingModule } from './laudos-medicos-routing.module';

import { LaudosMedicosPage } from './laudos-medicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaudosMedicosPageRoutingModule
  ],
  declarations: [LaudosMedicosPage]
})
export class LaudosMedicosPageModule {}
