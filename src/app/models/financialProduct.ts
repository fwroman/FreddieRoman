import { Product } from './product';

export class FinancialProduct extends Product {
  constructor(
    _id: string,
    _name: string,
    _description: string,
    private _logo: string,
    private _dateRelease: Date,
    private _dateRevision: Date
  ) {
    super(_id, _name, _description);
  }

  /** Gets the logo of the product. */
  get logo(): string {
    return this._logo;
  }

  /** Gets the release date of the product. */
  get releaseDate(): string {
    return `${this._dateRelease.getFullYear()}-${
      this._dateRelease.getMonth() + 1 < 10
        ? '0' + (this._dateRelease.getMonth() + 1)
        : this._dateRelease.getMonth() + 1
    }-${
      this._dateRelease.getDate() < 10
        ? '0' + this._dateRelease.getDate()
        : this._dateRelease.getDate()
    }`;
  }

  /** Gets the revision date of the product. */
  get revisionDate(): string {
    return `${this._dateRevision.getFullYear()}-${
      this._dateRevision.getMonth() + 1 < 10
        ? '0' + (this._dateRevision.getMonth() + 1)
        : this._dateRevision.getMonth() + 1
    }-${
      this._dateRevision.getDate() < 10
        ? '0' + this._dateRevision.getDate()
        : this._dateRevision.getDate()
    }`;
  }
}
