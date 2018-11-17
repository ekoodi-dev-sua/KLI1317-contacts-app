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

  addContact(contact: Contact) {
    const lastId = this.contacts[this.contacts.length - 1].id;
    contact.id = lastId + 1;
    this.contacts.push(contact);
  }

  deleteContact(id: number) {
    for (const entry of this.contacts) {
      if (entry.id === id) {
        this.contacts.splice( this.contacts.indexOf(entry), 1 );
      }
    }
  }

  editContact(contact: Contact) {
    this.contacts.forEach((entry, index) => {
      if (entry.id === contact.id) {
        this.contacts[index] = contact;
      }
    });
  }

  getContactById(id: string): Contact {
    let contactCopy: Contact;
    for (const entry of this.contacts) {
      if (entry.id === Number(id)) {
        // copy object, otherwise it modifies the object in an array before saving
        contactCopy = Object.assign({}, entry);
      }
    }
    return contactCopy;
  }
}
