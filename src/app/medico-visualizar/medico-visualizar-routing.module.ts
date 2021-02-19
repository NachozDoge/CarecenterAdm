import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicoVisualizarPage } from './medico-visualizar.page';

const routes: Routes = [
  {
    path: '',
    component: MedicoVisualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicoVisualizarPageRoutingModule {}
