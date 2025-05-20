import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { ContactListComponent } from './app/components/contact-list/contact-list.component';
import { AddContactComponent } from './app/pages/add-contact/add-contact.component';
import { EditContactComponent } from './app/pages/edit-contact/edit-contact.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: ContactListComponent },
      { path: 'add', component: AddContactComponent },
      { path: 'edit/:id', component: EditContactComponent }
    ])
  ]
}).catch(err => console.error(err));