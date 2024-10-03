import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FinancialProduct } from '../../models/financialProduct';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product';
import { GenericSubjectService } from '../../subjects/generic-subject.service';
import { ModalComponent } from '../generic/modal/modal.component';
import { MIconComponent } from '../generic/m-icon/m-icon.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ModalComponent, MIconComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  public productList: FinancialProduct[] = [];
  public selectedProduct: FinancialProduct | undefined;

  constructor(
    private productService: ProductService,
    private genericSubjectService: GenericSubjectService
  ) {}

  async ngOnInit(): Promise<void> {
    this.productList = await this.productService.listProducts();
  }

  /** Calls the Subject to send a product to the update product view. */
  public sendProduct(product: FinancialProduct): void {
    this.genericSubjectService.sendProductToUpdate(product);
  }

  /** Shows or hides the delete modal. */
  public showHideDeleteModal(show: boolean): void {
    this.genericSubjectService.showHideModal(show);
  }

  /** Hides the context menu that has the options for editing and removing a product. */
  public hideContextMenu(product: Product): void {
    setTimeout(() => {
      product.showContextualMenu = false;
    }, 100);
  }
}
