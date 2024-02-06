import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabamarilloPage } from './tabamarillo.page';

const routes: Routes = [
  {
    path: '',
    component: TabamarilloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabamarilloPageRoutingModule {}
