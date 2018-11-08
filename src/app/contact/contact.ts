export class Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gsm: string;

  constructor(id?: number, firstName?: string, lastName?: string, gsm?: string, email?: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gsm = gsm;
    this.email = email;
  }
}
