export abstract class Product {
  private _showContextualMenu!: boolean;

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

  /**
   * Shows/hides product's contextual menu by changing
   * the value of the flag _showContextualMenu.
   */
  set showContextualMenu(show: boolean) {
    this._showContextualMenu = show;
  }

  /** Checks whether product's contextual menu is shown. */
  get isContextMenuShown(): boolean {
    return this._showContextualMenu;
  }
}
