export interface Contact {
  id?: number; // Optional, as it will be auto-generated
  name: string;
  email: string;
  phone: string;
  type?: 'work' | 'personal' | 'family'; // Optional and limited to known values
  avatar?: string;}
