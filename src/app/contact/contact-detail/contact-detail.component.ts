import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../services/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) {
    this.contact = new Contact();
  }

  ngOnInit() {
    const contactId = this.route.snapshot.paramMap.get('id');
    if (contactId != null) {
      // Get contact by id
      if (this.contactService.getContactById(contactId) !== undefined) {
        this.contact = this.contactService.getContactById(contactId);
      } else {
        // contact not found, route to the list view
        this.router.navigate(['/contacts']);
      }
    }
  }

  onSave(): void {
    if (this.contact.id == null) {
      // Create contact
      console.log('ContactDetail: creating contact');
      this.contactService.addContact(this.contact);
    } else {
      console.log('ContactDetail: editing contact');
      this.contactService.editContact(this.contact);
    }

    this.router.navigate(['/contacts']);
  }

}
