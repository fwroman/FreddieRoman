export abstract class Product {
  constructor(
    private _id: string,
    private _name: string,
    private _description: string
  ) {}

  /** Gets the id of the product. */
  get id(): string {
    return this._id;
  }

  /** Gets the name of the product. */
  get name(): string {
    return this._name;
  }

  /** Gets the description of the product. */
  get description(): string {
    return this._description;
  }
}
