import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarMedicoPage } from './cadastrar-medico.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarMedicoPageRoutingModule {}
