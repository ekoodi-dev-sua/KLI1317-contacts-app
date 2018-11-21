import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  title: string;
  message: string;

  constructor(private dialog: MatDialogRef<ConfirmDialogComponent>) {
    this.dialog.disableClose = true;
    this.title = 'Remove item';
    this.message = 'Are you sure you want to remove item ?';
  }

  ngOnInit() {
  }
}
