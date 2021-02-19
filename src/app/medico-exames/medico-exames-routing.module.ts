import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicoExamesPage } from './medico-exames.page';

const routes: Routes = [
  {
    path: '',
    component: MedicoExamesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicoExamesPageRoutingModule {}
