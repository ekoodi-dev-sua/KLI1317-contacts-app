import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private router: Router) {
    this.contact = new Contact();
  }

  ngOnInit() {
  }

  onSave(): void {
    console.log('ContactDetail: new contact');
    console.log(this.contact);
    // Todo: add implementation for adding new contact
    this.router.navigate(['/contacts']);
  }

}
