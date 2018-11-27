import { Injectable } from '@angular/core';
import {Contact} from '../contact';
import {ContactLocalStorageService} from './contact-local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private contactLocalStorage: ContactLocalStorageService) {
  }

  getContacts(): Contact[] {
    return this.contactLocalStorage.getContacts();
  }

  addContact(contact: Contact) {
    this.contactLocalStorage.addContact(contact);
  }

  deleteContact(id: number) {
    this.contactLocalStorage.deleteContact(id);
  }

  editContact(contact: Contact) {
    this.contactLocalStorage.editContact(contact);
  }

  getContactById(id: string): Contact {
    return this.contactLocalStorage.getContactById(id);
  }
}
