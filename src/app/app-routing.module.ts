import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/shopkeeper-login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'shopkeeper-login',
    loadChildren: () => import('./auth/shopkeeper-login/shopkeeper-login.module').then( m => m.ShopkeeperLoginPageModule)
  },
  {
    path: 'user-login',
    loadChildren: () => import('./auth/user-login/user-login.module').then( m => m.UserLoginPageModule)
  },
  {
    path: 'user-register',
    loadChildren: () => import('./auth/user-register/user-register.module').then( m => m.UserRegisterPageModule)
  },
  {
    path: 'shopkeeper-register',
    loadChildren: () => import('./auth/shopkeeper-register/shopkeeper-register.module').then( m => m.ShopkeeperRegisterPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
