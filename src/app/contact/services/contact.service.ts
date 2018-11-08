import { Injectable } from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact(1, 'First', 'Contact', '+358 045 123 4567', 'first.contact@gmail.com'));
    this.contacts.push(new Contact(2, 'Second', 'Contact', '+358 046 234 2345', 'second.contact@gmail.com'));
    this.contacts.push(new Contact(3, 'Third', 'Contact', '+358 050 345 3456', 'third.contact@gmail.com'));
    this.contacts.push(new Contact(4, 'New', 'Contact', '+358 050 145 1456', 'new.contact@gmail.com'));
    this.contacts.push(new Contact(5, 'New', 'Contact', '+358 050 156 5678', 'new.contact@gmail.com'));
    this.contacts.push(new Contact(6, 'New', 'Contact', '+358 050 256 2567', 'new.contact@gmail.com'));
    this.contacts.push(new Contact(7, 'New', 'Contact', '+358 050 345 1234', 'new.contact@gmail.com'));
    this.contacts.push(new Contact(8, 'New', 'Contact', '+358 050 754 7652', 'new.contact@gmail.com'));
    this.contacts.push(new Contact(9, 'New', 'Contact', '+358 050 266 2567', 'new.contact@gmail.com'));
    this.contacts.push(new Contact(10, 'New', 'Contact', '+358 050 864 6553', 'new.contact@gmail.com'));
    this.contacts.push(new Contact(11, 'New', 'Contact', '+358 050 467 2441', 'new.contact@gmail.com'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  deleteContact(id: number) {
    console.log('Removing contact id: ' + id + '...' );
    for (let entry of this.contacts) {
      if (entry.id === id) {
        this.contacts.splice( this.contacts.indexOf(entry), 1 );
      }
    }
  }
}
