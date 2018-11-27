import { Injectable } from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactLocalStorageService {

  localStorageKey = 'contacts-app';
  contacts: Contact[];

  constructor() {
    if (!localStorage.getItem(this.localStorageKey)) {
      localStorage.setItem(this.localStorageKey, JSON.stringify([]));
    }

    // get contacts from the browser's local storage and save them into the contacts-array
    // update contacts-array when adding | editing | deleting contacts
    // update also the browser's local storage when adding | editing | deleting contacts
    const storageElement = localStorage.getItem(this.localStorageKey);
    this.contacts = JSON.parse(storageElement);
  }

  addContact(contact: Contact) {
    console.log('Adding contact id: ' + contact.id);
    let lastId = 1;
    if (this.contacts.length > 0) {
      // get the highest id, if contacts are available
      lastId = this.contacts[this.contacts.length - 1].id;
      lastId = lastId + 1;
    }
    contact.id = lastId;
    this.contacts.push(contact);

    // update local storage
    localStorage.removeItem(this.localStorageKey);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.contacts));
  }

  deleteContact(id: number) {
    console.log('Deleting contact id: ' + id);
    for (const entry of this.contacts) {
      if (entry.id === id) {
        this.contacts.splice( this.contacts.indexOf(entry), 1 );
      }
    }

    // update local storage
    localStorage.removeItem(this.localStorageKey);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.contacts));
  }

  editContact(contact: Contact) {
    console.log('Editing contact id: ' + contact.id);
    this.contacts.forEach((entry, index) => {
      if (entry.id === contact.id) {
        this.contacts[index] = contact;
      }
    });

    // update local storage
    localStorage.removeItem(this.localStorageKey);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.contacts));
  }

  getContactById(id: string): Contact {
    console.log('Retrieving contact by id: ' + id);
    let contactCopy: Contact;
    for (const entry of this.contacts) {
      if (entry.id === Number(id)) {
        // copy object, otherwise it modifies the object in an array before saving
        contactCopy = Object.assign({}, entry);
      }
    }
    return contactCopy;
  }

  getContacts(): Contact[] {
    console.log('Get all contacts');
/*
    const storageElement = localStorage.getItem(this.localStorageKey);
    const contacts = JSON.parse(storageElement);
    return contacts as Contact[];
*/
    return this.contacts;
  }
}
