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
  public product!: FinancialProduct;
  public resetProduct: boolean | undefined;

  constructor(private productService: ProductService) {
    this.product = new FinancialProduct('', '', '', '');
  }

  /** Submits the form to create a new product. */
  public async submit(_event: boolean) {
    await this.productService.createProducts(this.product);
    this.resetForm();
  }

  /** Sends the child component the updated flag to reset the form. */
  resetForm() {
    this.resetProduct = undefined;
    setTimeout(() => {
      this.resetProduct = true;
    });
  }

  ngAfterViewInit(): void {}
}
