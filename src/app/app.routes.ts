import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

export const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent,
    pathMatch: 'full',
  },
  {
    path: 'create-product',
    component: CreateProductComponent,
    pathMatch: 'full',
  },
  {
    path: 'update-product',
    component: UpdateProductComponent,
    pathMatch: 'full',
  },
  {
    path: '/',
    redirectTo: '/product-list',
  },
];
