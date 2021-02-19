import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarExamePageRoutingModule } from './agendar-exame-routing.module';

import { AgendarExamePage } from './agendar-exame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AgendarExamePageRoutingModule
  ],
  declarations: [AgendarExamePage]
})
export class AgendarExamePageModule {}
