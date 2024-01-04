import { Component } from '@angular/core';
import {Book} from "../../models/Book";
import {v4} from "uuid";
import {DataService} from "../services/data.service";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  books: Book[] = [];

  constructor(private data: DataService) {}

  async ionViewWillEnter() {

    this.books = await this.data.fetchBooks();

    console.log(this.books);

  }

  async changeBook(bookId: string, slidingItem: any) {

    let pos = this.books.findIndex((book) => {
      return book.Id == bookId;
    });

    if (pos !== -1) {

      let book = this.books[pos];
      book.Isbn = (Number(book.Isbn) + 1).toString();

      const bookResult = await this.data.updateBook(book);
      console.log('After saving');

      if (bookResult !== null) {
        console.log(bookResult);
        this.books[pos] = bookResult;
      }

      slidingItem.close();
    }




  }

}
