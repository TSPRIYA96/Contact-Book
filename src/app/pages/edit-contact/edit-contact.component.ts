import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact: Contact = { id: 0, name: '', email: '', phone: '' };

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const foundContact = this.contactService.getContactById(id);
    if (foundContact) {
      this.contact = { ...foundContact };
    } else {
      this.router.navigate(['/']);
    }
  }

  onUpdateContact(updatedContact: Contact): void {
    this.contactService.updateContact(updatedContact);
    this.router.navigate(['/']);
  }
}