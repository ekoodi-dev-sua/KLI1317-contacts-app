import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Contact} from '../contact';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ContactProvider} from '../interfaces/contact-provider';

@Injectable({
  providedIn: 'root'
})
export class ContactHttpService implements ContactProvider {

  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiEndpointUrl + '/contacts';
  }

  get(): Observable<Contact[]> {
    return this.httpClient.get(this.url).pipe(map(response => {
      return response as Contact[];
    }));
  }

  getById(id: string): Observable<Contact> {
    return this.httpClient.get(this.url + '/' + id).pipe(map(response => {
      return response as Contact;
    }));
  }

  edit(contact: Contact): Observable<Contact> {
    return this.httpClient.put(this.url + '/' + contact.id, contact).pipe(map(response => {
      return response as Contact;
    }));
  }

  create(contact: Contact): Observable<Contact> {
    return this.httpClient.post(this.url, contact).pipe(map(response => {
      return response as Contact;
    }));
  }

  delete(contact: Contact): Observable<any> {
    return this.httpClient.delete(this.url + '/' + contact.id);
  }
}
