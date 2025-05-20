import { Injectable } from '@angular/core';
import { Contact } from '../models/contact'; // Assuming Contact interface is defined in models/contact.ts

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];
  private nextId = 1;

  constructor() {
    // Add sample data
    this.addContact({
      name: 'ABCD',
      email: 'abcd@mail.com',
      phone: '123-456-7890',
      type: 'work'
    });
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContactById(id: number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }

  addContact(contact: Contact): void {
    contact.id = this.nextId++;
    this.contacts.push(contact);
  }

  updateContact(updatedContact: Contact): void {
    const index = this.contacts.findIndex(c => c.id === updatedContact.id);
    if (index !== -1) {
      this.contacts[index] = updatedContact;
    }
  }

  deleteContact(id: number): void {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
  }

  getEmptyContact(): Contact {
    return {
      id: 0,
      name: '',
      email: '',
      phone: '',
      type: 'personal' // default type
    };
  }
}
