import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor() {
    this.contacts = [];
  }

  ngOnInit() {
    this.contacts.push(new Contact(1, 'First', 'Contact'));
    this.contacts.push(new Contact(2, 'Second', 'Contact'));
    this.contacts.push(new Contact(3, 'Third', 'Contact'));
  }

}
