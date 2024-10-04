import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FinancialProduct } from '../models/financialProduct';
import { ToastTypes } from '../dto/productDto';

@Injectable({
  providedIn: 'root',
})
export class GenericSubjectService {
  private modalSubject = new BehaviorSubject<boolean>(false);
  modalObservable: Observable<boolean> = this.modalSubject.asObservable();

  private updateProductSubject = new BehaviorSubject<
    FinancialProduct | undefined
  >(undefined);
  updateProductObservable: Observable<FinancialProduct | undefined> =
    this.updateProductSubject.asObservable();

  private toastSubject = new BehaviorSubject<
    { toastType: ToastTypes; message: string } | undefined
  >(undefined);
  toastObservable: Observable<
    { toastType: ToastTypes; message: string } | undefined
  > = this.toastSubject.asObservable();

  /** Sends the selected product from the product list view to the update product view. */
  public sendProductToUpdate(product: FinancialProduct | undefined): void {
    this.updateProductSubject.next(product);
  }

  /** Shows or hides the toast alert. */
  public showHideToast(
    data: { toastType: ToastTypes; message: string } | undefined
  ): void {
    this.toastSubject.next(data);
  }

  /** Shows or hides the generic modal. */
  public showHideModal(show: boolean): void {
    this.modalSubject.next(show);
  }
}
