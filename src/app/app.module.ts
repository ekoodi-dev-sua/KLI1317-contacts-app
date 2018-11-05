import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactListItemComponent } from './contact/contact-list-item/contact-list-item.component';
import {ContactService} from './contact/services/contact.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './ui/toolbar/toolbar/toolbar.component';
import {MatButtonModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
