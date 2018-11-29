import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../services/contact.service';
import {Router} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ConfirmDialogComponent} from '../../ui/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() contactDeleted: EventEmitter<any>;

  constructor(private router: Router,
              private contactService: ContactService,
              private snackBar: MatSnackBar,
              private dialog: MatDialog) {
    this.contactDeleted = new EventEmitter();
  }

  ngOnInit() {
    console.log(this.contact);
  }

  deleteItem() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Removing contact');
        this.removeContact();
        // this.contactService.deleteContact(this.contact.id);
        /*
        this.snackBar.open('Contact removed',
          this.contact.firstName + ' ' + this.contact.lastName,
          {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'center'
          });
         */
        // this.contactDeleted.emit(this.contact);
      } else {
        console.log('Removing cancelled');
      }
    });
  }

  editItem() {
    this.router.navigate(['contacts/edit', this.contact.id]);
  }

  removeContact() {
    this.contactService.deleteContact(this.contact).subscribe(() => {
      this.snackBar.open('Contact removed',
        this.contact.firstName + ' ' + this.contact.lastName,
        {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center'
        });
      this.contactDeleted.emit(this.contact);
    });
  }

}
