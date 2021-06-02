import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopkeeperLoginPage } from './shopkeeper-login.page';

const routes: Routes = [
  {
    path: '',
    component: ShopkeeperLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopkeeperLoginPageRoutingModule {}
