import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopkeeperRegisterPage } from './shopkeeper-register.page';

const routes: Routes = [
  {
    path: '',
    component: ShopkeeperRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopkeeperRegisterPageRoutingModule {}
