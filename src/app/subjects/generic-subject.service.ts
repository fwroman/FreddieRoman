import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenericSubjectService {
  private modalSubject = new BehaviorSubject<boolean>(false);
  modalObservable: Observable<boolean> = this.modalSubject.asObservable();

  /** Shows or hides the generic modal. */
  public showHideModal(show: boolean) {
    this.modalSubject.next(show);
  }
}
