import { AfterViewInit, Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FinancialProduct } from '../../models/financialProduct';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements AfterViewInit {
  public productList!: FinancialProduct[];

  constructor(private productService: ProductService) {}

  async ngAfterViewInit(): Promise<void> {
    this.productList = await this.productService.listProducts();
    console.log('this.productList', this.productList);
  }
}
