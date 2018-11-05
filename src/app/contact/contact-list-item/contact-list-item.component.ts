import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() contactSelect: EventEmitter;

  constructor() {
    this.contactSelect = new EventEmitter();
  }

  ngOnInit() {
    console.log(this.contact);
  }

  onContactSelect() {
    this.contactSelect.emit();
  }

}
