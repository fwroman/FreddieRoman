import { Product } from './product';

export class FinancialProduct extends Product {
  constructor(
    _id: string,
    _name: string,
    _description: string,
    private _logo: string,
    private _releaseDate?: string,
    private _revisionDate?: string
  ) {
    super(_id, _name, _description);
  }

  /** Sets the logo of the product. */
  set logo(logo: string) {
    this._logo = logo;
  }

  /** Gets the logo of the product. */
  get logo(): string {
    return this._logo;
  }

  /** Sets the releaseDate of the product. */
  set releaseDate(releaseDate: string) {
    this._releaseDate = releaseDate;
  }

  /** Gets the release date of the product. */
  get releaseDate(): string | undefined {
    return this._releaseDate;
  }

  /** Sets the revisionDate of the product. */
  set revisionDate(revisionDate: string) {
    this._revisionDate = revisionDate;
  }

  /** Gets the revision date of the product. */
  get revisionDate(): string | undefined {
    return this._revisionDate;
  }
}
