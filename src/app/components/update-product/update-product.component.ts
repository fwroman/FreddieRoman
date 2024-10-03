import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductFormComponent } from '../generic/product-form/product-form.component';
import { FinancialProduct } from '../../models/financialProduct';
import { Subscription } from 'rxjs';
import { GenericSubjectService } from '../../subjects/generic-subject.service';

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

  constructor(private genericSubjectService: GenericSubjectService) {
    this.product = new FinancialProduct('', '', '', '');
  }

  ngOnInit(): void {
    this.subscription =
      this.genericSubjectService.updateProductObservable.subscribe((prod) => {
        if (prod) {
          this.product = prod;
          this.product.newRecord = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.genericSubjectService.sendProductToUpdate(undefined);
  }
}
