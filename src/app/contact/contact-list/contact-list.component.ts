import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService, private router: Router, private toolbar: ToolbarService, private snackBar: MatSnackBar) {
    this.contacts = [];
  }

  ngOnInit() {
    this.toolbar.setToolbarOptions(new ToolbarOptions('menu', 'Contacts Application'));
    // this.contacts = this.contactService.getContacts();
    this.loadContacts();
  }

  onContactDeleted(contact: Contact) {
    console.log('Contact deleted: ' + contact.id);
    this.loadContacts();
  }

  onContactCreate(): void {
    console.log('ContactListComponent: onContactCreate');
    this.router.navigate(['/contacts/new']);
  }

  loadContacts(): void {
    this.contactService.getContacts().subscribe(result => {
      this.contacts = result;
    });
    console.log(this.contacts);
  }

}
