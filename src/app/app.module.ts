import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactListItemComponent } from './contact/contact-list-item/contact-list-item.component';
import {ContactService} from './contact/services/contact.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './ui/toolbar/toolbar/toolbar.component';
import {
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatDividerModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatSidenavModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AvatarModule} from 'ngx-avatar';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {ToolbarService} from './ui/toolbar/toolbar.service';
import {ContactLocalStorageService} from './contact/services/contact-local-storage.service';
import { ConfirmDialogComponent } from './ui/confirm-dialog/confirm-dialog.component';
import {ContactProvider} from './contact/interfaces/contact-provider';
import {ContactHttpService} from './contact/services/contact-http.service';
import {environment} from '../environments/environment';

const appRoutes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: 'contacts/new', component: ContactDetailComponent},
  {path: 'contacts/edit/:id', component: ContactDetailComponent},
  {path: '', redirectTo: '/contacts', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactListItemComponent,
    ToolbarComponent,
    ContactDetailComponent,
    ConfirmDialogComponent
  ],
  imports: [
    AvatarModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatSnackBarModule,
    NgxPaginationModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ContactService,
    ToolbarService,
    ContactLocalStorageService,
    { provide: ContactProvider, useClass: environment.apiEnabled ? ContactHttpService : ContactLocalStorageService }
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
