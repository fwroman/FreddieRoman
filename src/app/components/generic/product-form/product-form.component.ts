import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MIconComponent } from '../m-icon/m-icon.component';
import { FinancialProduct } from '../../../models/financialProduct';
import { FormsModule, NgForm } from '@angular/forms';
import { formatDate } from '../../../utils/formatterts';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[product-form]',
  standalone: true,
  imports: [CommonModule, MIconComponent, FormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements OnInit, OnChanges {
  @Input() product!: FinancialProduct;
  @Input() resetProduct: boolean | undefined;
  @Output() isProductFilledIn = new EventEmitter<boolean>();
  @ViewChild('prodForm') productForm!: NgForm;
  private _minDate = new Date();
  private initialProduct!: FinancialProduct;

  constructor() {
    this.product = new FinancialProduct('', '', '', '');
  }

  ngOnInit(): void {
    this.initialProduct = new FinancialProduct(
      this.product.id,
      this.product.name,
      this.product.description,
      this.product.logo,
      this.product.releaseDate,
      this.product.revisionDate
    );
  }

  /** Resets all the properties within the form. */
  public resetForm() {
    this.productForm.resetForm(this.initialProduct);
  }

  /** Sends the new product to the parent component. */
  public sendProduct() {
    this.isProductFilledIn.emit(true);
  }

  /** Sets the value of the product's revisionDate automatically. */
  public setRevisionDate() {
    const date = new Date(this.product.releaseDate!);
    date.setFullYear(date.getFullYear() + 1);
    date.setDate(date.getDate() + 1);
    this.product.revisionDate = formatDate(date);
  }

  /** Formats the string value of the min date for validation. */
  public get minDate() {
    return formatDate(this._minDate);
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const property in changes) {
      if (property == 'resetProduct') {
        if (!!this.resetProduct) {
          this.resetForm();
        }
      }
    }
  }
}
