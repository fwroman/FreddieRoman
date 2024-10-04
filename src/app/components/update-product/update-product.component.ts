import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductFormComponent } from '../generic/product-form/product-form.component';
import { FinancialProduct } from '../../models/financialProduct';
import { Subscription } from 'rxjs';
import { GenericSubjectService } from '../../subjects/generic-subject.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [ProductFormComponent],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss',
})
export class UpdateProductComponent implements OnInit, OnDestroy {
  public product!: FinancialProduct;
  private subscription!: Subscription;

  constructor(
    private productService: ProductService,
    private genericSubjectService: GenericSubjectService
  ) {
    this.product = new FinancialProduct('', '', '', '');
  }

  /** Submits the form to update a new product. */
  public async submit(_event: boolean) {
    await this.productService.editProduct(this.product);
  }

  ngOnInit(): void {
    this.subscription =
      this.genericSubjectService.updateProductObservable.subscribe((prod) => {
        if (prod) {
          this.product = prod;
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.genericSubjectService.sendProductToUpdate(undefined);
  }
}
