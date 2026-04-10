import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { ProductList } from './components/product-list/product-list';
import { ProductForm } from './components/product-form/product-form';
import { authGuard } from './guards/auth.guard';
import { Skin } from './components/skin/skin';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'products', component: ProductList, canActivate: [authGuard] },
  { path: 'products/create', component: ProductForm, canActivate: [authGuard] },
  { path: 'products/edit/:id', component: ProductForm, canActivate: [authGuard] },
  { path: 'skin', component: Skin, canActivate: [authGuard] },
  { path: '**', redirectTo: 'login' },
];
