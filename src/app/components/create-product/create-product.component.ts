import { AfterViewInit, Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FinancialProduct } from '../../models/financialProduct';
import { ProductFormComponent } from '../generic/product-form/product-form.component';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [ProductFormComponent],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
})
export class CreateProductComponent implements AfterViewInit {
  constructor(private productService: ProductService) {}

  ngAfterViewInit(): void {}
}
