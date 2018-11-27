import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';
import {ToolbarService} from '../../ui/toolbar/toolbar.service';
import {ToolbarOptions} from '../../ui/toolbar/toolbar-options';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private contactService: ContactService,
              private toolbar: ToolbarService,
              private snackBar: MatSnackBar) {
    this.contact = new Contact();
  }

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId != null) {
      this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Edit contact'));
      // Get contact by id
      if (this.contactService.getContactById(contactId) !== undefined) {
        this.contact = this.contactService.getContactById(contactId);
      } else {
        // contact not found, route to the list view
        this.router.navigate(['/contacts']);
      }
    } else {
      this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Create contact'));
    }
  }

  onSave(): void {
    let msgInfo = '';

    if (this.contact.id == null) {
      // Create contact
      console.log('ContactDetail: creating contact');
      this.contactService.addContact(this.contact);
      msgInfo = 'Contact saved';

    } else {
      console.log('ContactDetail: editing contact');
      this.contactService.editContact(this.contact);
      msgInfo = 'Contact edited';
    }

    this.snackBar.open(msgInfo,
      this.contact.firstName + ' ' + this.contact.lastName,
      {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center'
      });

    this.router.navigate(['/contacts']);
  }

}
