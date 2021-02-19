import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichaMedicaPageRoutingModule } from './ficha-medica-routing.module';
import { ExpandableComponent } from "../components/expandable/expandable.component";
import { FichaMedicaPage } from './ficha-medica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichaMedicaPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [FichaMedicaPage, ExpandableComponent]
})
export class FichaMedicaPageModule {}
