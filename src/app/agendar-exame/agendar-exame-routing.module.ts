import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarExamePage } from './agendar-exame.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarExamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarExamePageRoutingModule {}
