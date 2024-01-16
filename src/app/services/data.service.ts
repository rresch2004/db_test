import { Injectable } from '@angular/core';
import {Wealthwizard} from "../../models/Book";
const PouchDB = require('pouchdb').default;


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private db;

  constructor() {
    console.log('Service created');
    this.db = new PouchDB('wealthwizard');
  }

  createUserDatabase(username: string) {
    return new PouchDB(`userdb-${username}`);
  }

  async updateWealthwizard(wealthwizard: Wealthwizard): Promise<Wealthwizard | null> {
    try {
      // Wealthwizard in die Datenbank speichern
      const response = await this.db.put(wealthwizard);

      if (response.ok) {
        wealthwizard.Rev = response.rev;
        return wealthwizard;
      } else {
        return null;
      }
    } catch (err) {
      return null;
    }
  }

  async saveWealthwizard(wealthwizard: Wealthwizard): Promise<boolean> {
    try {
      console.log(wealthwizard);
      const response = await this.db.put(wealthwizard);
      console.log(response);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async fetchWealthwizards(): Promise<Wealthwizard[]> {
    try {
      const data = await this.db.allDocs({
        include_docs: true
      });

      const wealthwizards = data.rows.map((row: any) => {
        const w = new Wealthwizard(row.doc.isbn, row.doc.name, row.doc._id);
        w.Rev = row.doc._rev;
        return w;
      });

      return wealthwizards;

    } catch (err) {
      return [];
    }
  }
}