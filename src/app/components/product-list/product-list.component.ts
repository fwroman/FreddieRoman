import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FinancialProduct } from '../../models/financialProduct';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product';
import { GenericSubjectService } from '../../subjects/generic-subject.service';
import { ModalComponent } from '../generic/modal/modal.component';
import { MIconComponent } from '../generic/m-icon/m-icon.component';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ModalComponent,
    MIconComponent,
    FormsModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  private productList: FinancialProduct[] = [];
  public selectedProduct: FinancialProduct | undefined;
  public itemsPerPage: number = 5;
  public currentPage: number = 0;
  public filterString: string = '';

  constructor(
    private productService: ProductService,
    private genericSubjectService: GenericSubjectService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.getProducts();
  }

  /** Deletes the selected product. */
  public async deleteProduct() {
    await this.productService.deleteProductById(this.selectedProduct?.id!);
    this.showHideDeleteModal(false);
    await this.getProducts();
  }

  /** Get the list of products. */
  async getProducts(): Promise<void> {
    this.productList = await this.productService.listProducts();
  }

  /** Returns the number of pages for displaying the paginator. */
  get numberOfPages() {
    return Math.ceil(this.filteredList.length / this.itemsPerPage);
  }

  /** Returns  a paginated list of products. */
  get paginatedList() {
    const offset = this.currentPage * this.itemsPerPage;
    return this.filteredList.slice(offset, offset + this.itemsPerPage);
  }

  /** Returns a filtered list of products. */
  get filteredList() {
    return this.productList.filter(
      (r) =>
        r.name.toLowerCase().includes(this.filterString.toLowerCase()) ||
        r.description.toLowerCase().includes(this.filterString.toLowerCase())
    );
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
