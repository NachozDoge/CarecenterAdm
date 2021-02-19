import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultasVisualizarPage } from './consultas-visualizar.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultasVisualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultasVisualizarPageRoutingModule {}
