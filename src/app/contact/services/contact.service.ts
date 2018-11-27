import { Injectable } from '@angular/core';
import {Contact} from '../contact';
import {ContactLocalStorageService} from './contact-local-storage.service';
import {ContactHttpService} from './contact-http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private contactLocalStorage: ContactLocalStorageService, private contactHttpService: ContactHttpService) {
  }

  /*
  getContacts(): Contact[] {
    return this.contactLocalStorage.getContacts();
  }
  */
  getContacts(): Observable<Contact[]> {
    return this.contactHttpService.get();
  }

  /*
  addContact(contact: Contact) {
    this.contactLocalStorage.addContact(contact);
  }
  */
  addContact(contact: Contact): Observable<Contact> {
    return this.contactHttpService.post(contact);
  }

  /*
  deleteContact(id: number) {
    this.contactLocalStorage.deleteContact(id);
  }
  */
  deleteContact(contact: Contact): Observable<any> {
    return this.contactHttpService.delete(contact);
  }

  /*
  editContact(contact: Contact) {
    this.contactLocalStorage.editContact(contact);
  }
  */
  editContact(contact: Contact): Observable<Contact> {
    return this.contactHttpService.put(contact);
  }

  /*
  getContactById(id: string): Contact {
    return this.contactLocalStorage.getContactById(id);
  }
  */
  getContactById(id: string): Observable<Contact> {
    return this.contactHttpService.getById(id);
  }
}
