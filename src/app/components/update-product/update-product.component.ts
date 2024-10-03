import { Component } from '@angular/core';
import { ProductFormComponent } from '../generic/product-form/product-form.component';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [ProductFormComponent],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss',
})
export class UpdateProductComponent {}
