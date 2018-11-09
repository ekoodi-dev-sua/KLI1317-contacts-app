import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService) {
    this.contacts = [];
  }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    console.log(this.contacts);
  }

  onContactSelect(contact: Contact) {
    console.log('Contact selected: ' + contact.id);
  }

}
