import { Injectable } from '@angular/core';
import { GenericClientService } from '../api-client/genericClient.service';
import { catchError, map, Observable } from 'rxjs';
import { ApiGetResponse, ApiPostResponse, ApiProduct } from '../dto/productDto';
import { FinancialProduct } from '../models/financialProduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductControllerService {
  constructor(private genericClientService: GenericClientService) {}

  /**
   * Deletes a product by ID.
   * @returns an observable with a unknown value.
   */
  public deleteProductById(productId: string): Observable<unknown> {
    const url = `${environment.baseApiUrl}/bp/products/${productId}`;
    return this.genericClientService
      .genericHttpRequestDelete<unknown>(url)
      .pipe(
        catchError((err) => {
          throw err?.error?.message;
        })
      );
  }

  /**
   * Updates an existing product.
   * @returns an observable with FinancialProduct object.
   */
  public updateProductClient(
    product: FinancialProduct
  ): Observable<FinancialProduct> {
    const url = `${environment.baseApiUrl}/bp/products/${product.id}`;
    return this.genericClientService
      .genericHttpRequestPut<ApiProduct, ApiPostResponse>(
        url,
        this.mapApiProduct(product)
      )
      .pipe(
        map((response) => {
          return this.mapFinancialProduct(response.data);
        }),
        catchError((err) => {
          throw err?.error?.message;
        })
      );
  }

  /**
   * Verifies if a product exists with the given ID.
   * @returns an observable with a boolean value.
   */
  public productExistsById(productId: string): Observable<boolean> {
    const url = `${environment.baseApiUrl}/bp/products/verification/${productId}`;
    return this.genericClientService.genericHttpRequestGet<boolean>(url);
  }

  /**
   * Creates a new product.
   * @returns an observable with FinancialProduct object.
   */
  public createProductClient(
    product: FinancialProduct
  ): Observable<FinancialProduct> {
    const url = `${environment.baseApiUrl}/bp/products`;
    return this.genericClientService
      .genericHttpRequestPost<ApiProduct, ApiPostResponse>(
        url,
        this.mapApiProduct(product)
      )
      .pipe(
        map((response) => {
          return this.mapFinancialProduct(response.data);
        }),
        catchError((err) => {
          throw err?.error?.message;
        })
      );
  }

  /**
   * Gets a list of products.
   * @returns an observable with a list of FinancialProduct.
   */
  public getProductsClient(): Observable<FinancialProduct[]> {
    const url = `${environment.baseApiUrl}/bp/products`;
    return this.genericClientService
      .genericHttpRequestGet<ApiGetResponse>(url)
      .pipe(
        map((response) => this.mapProductList(response.data)),
        catchError((err) => {
          throw err?.error?.message;
        })
      );
  }

  /**
   * Maps a list of ApiProduct into a FinancialProduct list.
   * @param response The API response data.
   * @returns FinancialProduct[]
   */
  private mapProductList(apiProductList: ApiProduct[]): FinancialProduct[] {
    return apiProductList.map((record) => this.mapFinancialProduct(record));
  }

  /**
   * Converts a FinancialProduct object into a ApiProduct object.
   * @param product The object that represents the new product.
   * @returns ApiProduct
   */
  private mapApiProduct(product: FinancialProduct): ApiProduct {
    const apiProd = {
      id: product.id,
      name: product.name,
      description: product.description,
      logo: product.logo,
      date_release: product.releaseDate!,
      date_revision: product.revisionDate!,
    } satisfies ApiProduct;

    return apiProd;
  }

  /**
   * Converts an ApiProduct object into a FinancialProduct object.
   * @param apiProduct The object that comes from the API response.
   * @returns FinancialProduct
   */
  private mapFinancialProduct(apiProduct: ApiProduct): FinancialProduct {
    return new FinancialProduct(
      apiProduct.id,
      apiProduct.name,
      apiProduct.description,
      apiProduct.logo,
      apiProduct.date_release,
      apiProduct.date_revision
    );
  }
}
