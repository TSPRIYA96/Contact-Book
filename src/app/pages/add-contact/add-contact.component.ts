import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  constructor(
    private contactService: ContactService,
    private router: Router
  ) {}

  onAddContact(contact: Contact): void {
    this.contactService.addContact(contact);
    this.router.navigate(['/']);
  }
}