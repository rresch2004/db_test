import { Injectable } from '@angular/core';
import {Book} from "../../models/Book";
const PouchDB = require('pouchdb').default;


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private db;
  constructor() {
    console.log('Service created');

    this.db = PouchDB('books');

  }



  async updateBook(book: Book): Promise<Book | null> {
    try {

      // save book to db
      var response = await this.db.put(book);

      if (response.ok) {
        book.Rev = response.rev;

        return book;
      }
      else {
        return null;
      }

    }
    catch (err) {
      return null;
    }
  }

  async saveBook(book: Book): Promise<boolean> {
    try {
      console.log(book);

      var response = await this.db.put(book);

      console.log(response);

      return true;
    }
    catch (err) {
      console.log(err);
      return false;
    }
  }

  async fetchBooks(): Promise<Book[]> {
    try {

      const data = await this.db.allDocs({
        include_docs: true
      });

      console.log(data);


      const books = data.rows.map((row: any) => {
        console.log(row.doc);
        const b = new Book(row.doc.isbn, row.doc.name, row.doc._id);
        b.Rev = row.doc._rev;

        return b;
      });

      return books;

    }
    catch (err) {
      return [];
    }
  }



}
