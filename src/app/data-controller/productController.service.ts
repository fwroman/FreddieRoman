import { Injectable } from '@angular/core';
import { GenericClientService } from '../api-client/genericClient.service';
import { map, Observable } from 'rxjs';
import { ApiGetResponse, ApiPostResponse, ApiProduct } from '../dto/productDto';
import { FinancialProduct } from '../models/financialProduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductControllerService {
  constructor(private genericClientService: GenericClientService) {}

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
          console.log('response.message', response.message);
          return this.mapFinancialProduct(response.data);
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
      .pipe(map((response) => this.mapProductList(response.data)));
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
