import {v4} from "uuid";

export class Book {

  /**
   * Id of the book
   *
   * @private
   */
  private _id = '';
  public get Id() {
    return this._id;
  }
  public  set Id(value: string) {
    this._id = value;
  }

  /**
   * Rev of the book
   *
   * @private
   */
  private _rev = '';
  public get Rev() {
    return this._rev;
  }
  public  set Rev(value: string) {
    this._rev = value;
  }

  /**
   * Isbn number
   *
   * @private
   */
  private isbn = '';
  public get Isbn() {
    return this.isbn;
  }
  public set Isbn(value: string) {
    this.isbn = value;
  }


  /**
   * Name of the book
   *
   * @private
   */
  private name = '';
  public get Name() {
    return this.name;
  }
  public  set Name(value: string) {
    this.name = value;
  }


  constructor(isbn: string, name: string, id?: string, ) {

    this.Name = name;
    this.Isbn = isbn;

    if (id == null) {
      this.Id = v4();
    }
    else {
      this.Id = id;
    }

  }


}
