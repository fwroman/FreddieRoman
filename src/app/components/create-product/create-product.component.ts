import { AfterViewInit, Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FinancialProduct } from '../../models/financialProduct';
import { ProductFormComponent } from '../generic/product-form/product-form.component';
import { GenericSubjectService } from '../../subjects/generic-subject.service';
import { ToastTypes } from '../../dto/productDto';

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

  constructor(
    private productService: ProductService,
    private genericSubjectService: GenericSubjectService
  ) {
    this.product = new FinancialProduct('', '', '', '');
  }

  /** Submits the form to create a new product. */
  public async submit(_event: boolean) {
    try {
      await this.productService.createProducts(this.product);
      this.genericSubjectService.showHideToast({
        toastType: ToastTypes.Success,
        message: 'Producto creado correctamente.',
      });
      this.resetForm();
    } catch (err) {
      this.genericSubjectService.showHideToast({
        toastType: ToastTypes.Error,
        message: err as string,
      });
    }
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
