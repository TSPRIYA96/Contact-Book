import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input() contact: Contact = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    type: 'personal'  // Default type
  };

  @Output() submitContact = new EventEmitter<Contact>();

  isEditMode: boolean = false;

  ngOnInit(): void {
    this.isEditMode = !!this.contact?.id;  // Check if contact has an ID to determine edit mode
  }

  onSubmit(): void {
    this.submitContact.emit(this.contact);
  }

  onCancel(): void {
    this.contact = {
      id: 0,
      name: '',
      email: '',
      phone: '',
      type: 'personal'
    };
    this.isEditMode = false;
  }
}
