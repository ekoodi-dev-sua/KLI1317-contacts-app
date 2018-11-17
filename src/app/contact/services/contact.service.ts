import { Injectable } from '@angular/core';
import {Contact} from '../contact';
import {StorageService} from 'ng-storage-service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];
  useLocalStorage = false;
  LOCAL_STORAGE_KEY = 'contactsJson';

  constructor(private localStorageService: StorageService) {
    // clear local storage
    // this.localStorageService.remove(this.LOCAL_STORAGE_KEY);

    this.contacts = [];

    if (!this.useLocalStorage) {
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

    } else if (this.localStorageService.isSupported()) {
      // Get contacts from the browser's local storage
      if (this.localStorageService.has(this.LOCAL_STORAGE_KEY)) {
        if (JSON.parse(this.localStorageService.get(this.LOCAL_STORAGE_KEY)) instanceof Array ) {
          for (const currentContact of JSON.parse(this.localStorageService.get(this.LOCAL_STORAGE_KEY))) {
            this.contacts.push(currentContact);
          }
        }
      }
    }
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  addContact(contact: Contact) {
    let lastId = 1;
    if (this.contacts.length > 0) {
      // get the highest id, if contacts are available
      lastId = this.contacts[this.contacts.length - 1].id;
      lastId = lastId + 1;
    }
    contact.id = lastId;
    this.contacts.push(contact);

    if (this.useLocalStorage) {
      // update local storage
      this.localStorageService.remove(this.LOCAL_STORAGE_KEY);
      this.localStorageService.set(this.LOCAL_STORAGE_KEY, JSON.stringify(this.contacts));
    }
  }

  deleteContact(id: number) {
    for (const entry of this.contacts) {
      if (entry.id === id) {
        this.contacts.splice( this.contacts.indexOf(entry), 1 );
      }
    }

    if (this.useLocalStorage) {
      // update local storage
      this.localStorageService.remove(this.LOCAL_STORAGE_KEY);
      this.localStorageService.set(this.LOCAL_STORAGE_KEY, JSON.stringify(this.contacts));
    }
  }

  editContact(contact: Contact) {
    this.contacts.forEach((entry, index) => {
      if (entry.id === contact.id) {
        this.contacts[index] = contact;
      }
    });

    if (this.useLocalStorage) {
      // update local storage
      this.localStorageService.remove(this.LOCAL_STORAGE_KEY);
      this.localStorageService.set(this.LOCAL_STORAGE_KEY, JSON.stringify(this.contacts));
    }
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
