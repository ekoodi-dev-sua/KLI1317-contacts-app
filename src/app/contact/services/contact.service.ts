import { Injectable } from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact(1, 'First', 'Contact'));
    this.contacts.push(new Contact(2, 'Second', 'Contact'));
    this.contacts.push(new Contact(3, 'Third', 'Contact'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }
}
