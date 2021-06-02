import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopkeeperRegisterPageRoutingModule } from './shopkeeper-register-routing.module';

import { ShopkeeperRegisterPage } from './shopkeeper-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopkeeperRegisterPageRoutingModule
  ],
  declarations: [ShopkeeperRegisterPage]
})
export class ShopkeeperRegisterPageModule {}
