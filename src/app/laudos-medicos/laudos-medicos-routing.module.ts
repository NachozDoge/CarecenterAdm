import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaudosMedicosPage } from './laudos-medicos.page';

const routes: Routes = [
  {
    path: '',
    component: LaudosMedicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaudosMedicosPageRoutingModule {}
