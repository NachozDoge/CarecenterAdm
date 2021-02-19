import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarPerfilPage } from './cadastrar-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarPerfilPageRoutingModule {}
