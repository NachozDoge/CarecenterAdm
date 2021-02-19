import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExameVisualizarPage } from './exame-visualizar.page';

const routes: Routes = [
  {
    path: '',
    component: ExameVisualizarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExameVisualizarPageRoutingModule {}
