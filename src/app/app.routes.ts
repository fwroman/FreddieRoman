import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'product-list',
    loadComponent: () =>
      import('./components/product-list/product-list.component').then(
        (m) => m.ProductListComponent
      ),
  },
  {
    path: 'create-product',
    loadComponent: () =>
      import('./components/create-product/create-product.component').then(
        (m) => m.CreateProductComponent
      ),
  },
  {
    path: 'update-product',
    loadComponent: () =>
      import('./components/update-product/update-product.component').then(
        (m) => m.UpdateProductComponent
      ),
  },
  {
    path: '',
    redirectTo: 'product-list',
    pathMatch: 'full',
  },
];
