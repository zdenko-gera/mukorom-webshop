import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const newLocal = '';
const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) 
  },
  {
    path: 'stores',
    loadChildren: () => import('./pages/stores/stores.module').then(m => m.StoresModule) 
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule) 
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) 
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  { 
    path: 'signup', 
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) 
  },
{
  path: '',
  redirectTo: '/main',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/not-found'

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
