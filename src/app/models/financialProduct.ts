import { Product } from './product';

export class FinancialProduct extends Product {
  constructor(
    _id: string,
    _name: string,
    _description: string,
    private _logo: string,
    private _releaseDate: Date,
    private _revisionDate: Date
  ) {
    super(_id, _name, _description);
  }

  /** Gets the logo of the product. */
  get logo(): string {
    return this._logo;
  }

  /** Gets the release date of the product. */
  get releaseDate(): string {
    return `${this._releaseDate.getFullYear()}-${
      this._releaseDate.getMonth() + 1 < 10
        ? '0' + (this._releaseDate.getMonth() + 1)
        : this._releaseDate.getMonth() + 1
    }-${
      this._releaseDate.getDate() < 10
        ? '0' + this._releaseDate.getDate()
        : this._releaseDate.getDate()
    }`;
  }

  /** Gets the revision date of the product. */
  get revisionDate(): string {
    return `${this._revisionDate.getFullYear()}-${
      this._revisionDate.getMonth() + 1 < 10
        ? '0' + (this._revisionDate.getMonth() + 1)
        : this._revisionDate.getMonth() + 1
    }-${
      this._revisionDate.getDate() < 10
        ? '0' + this._revisionDate.getDate()
        : this._revisionDate.getDate()
    }`;
  }
}
