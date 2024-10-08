import { Injectable } from '@angular/core';
import { ProductControllerService } from '../data-controller/productController.service';
import { lastValueFrom } from 'rxjs';
import { FinancialProduct } from '../models/financialProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private productControllerService: ProductControllerService) {}

  /**
   * Deletes a product by ID.
   * @returns an observable with a unknown value.
   */
  public deleteProductById(productId: string): Promise<unknown> {
    try {
      return lastValueFrom(
        this.productControllerService.deleteProductById(productId)
      );
    } catch (err) {
      throw err;
    }
  }

  /**
   * Edits an existing product.
   * @returns a promise a FinancialProduct object.
   */
  public editProduct(product: FinancialProduct): Promise<FinancialProduct> {
    try {
      return lastValueFrom(
        this.productControllerService.updateProductClient(product)
      );
    } catch (err) {
      throw err;
    }
  }

  /**
   * Verifies if a product exists with the given ID.
   * @returns an promise with a boolean value.
   */
  public productExistsById(productId: string): Promise<boolean> {
    try {
      return lastValueFrom(
        this.productControllerService.productExistsById(productId)
      );
    } catch (err) {
      throw err;
    }
  }

  /**
   * Creates a new product.
   * @returns a promise a FinancialProduct object.
   */
  public createProducts(product: FinancialProduct): Promise<FinancialProduct> {
    try {
      return lastValueFrom(
        this.productControllerService.createProductClient(product)
      );
    } catch (err) {
      throw err;
    }
  }

  /**
   * Gets a list of products.
   * @returns a promise with a list of FinancialProduct.
   */
  public listProducts(): Promise<FinancialProduct[]> {
    try {
      return lastValueFrom(this.productControllerService.getProductsClient());
    } catch (err) {
      throw err;
    }
  }
}
