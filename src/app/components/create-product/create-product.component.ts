import { AfterViewInit, Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FinancialProduct } from '../../models/financialProduct';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
})
export class CreateProductComponent implements AfterViewInit {
  constructor(private productService: ProductService) {}

  ngAfterViewInit(): void {}
}
