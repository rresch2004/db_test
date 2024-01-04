import { Component } from '@angular/core';
import {DataService} from "../services/data.service";
import {Book} from "../../models/Book";
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private alertController: AlertController, private data: DataService) {

  }

  async addBookAlert() {
    const alert = await this.alertController.create({
      header: 'Buch hinzufügen',
      buttons: [
        {
          text: 'OK',
          handler: async (input) => {
            console.log(input);
            let bookName = input.name;
            let bookIsbn = input.isbn;

            await this.addBook(bookIsbn, bookName);
          }
        }
      ],
      inputs: [
        {
          name: 'isbn',
          placeholder: 'Isbn',
        },
        {
          name: 'name',
          placeholder: 'Name',
        }
      ],
    });

    await alert.present();
  }

  async addBook(isbn: string, name: string) {
    let book = new Book(isbn, name);

    const erg = await this.data.saveBook(book);

    if (erg) {
      console.log('Der Speichervorgang war erfolgreich.');
    }
    else {
      console.log('Das Buch konnte nicht gespeichert werden.');
    }
  }

}
