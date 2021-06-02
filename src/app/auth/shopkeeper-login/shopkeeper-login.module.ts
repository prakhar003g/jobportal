import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopkeeperLoginPageRoutingModule } from './shopkeeper-login-routing.module';

import { ShopkeeperLoginPage } from './shopkeeper-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopkeeperLoginPageRoutingModule
  ],
  declarations: [ShopkeeperLoginPage]
})
export class ShopkeeperLoginPageModule {}
