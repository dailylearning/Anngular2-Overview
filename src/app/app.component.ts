import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <p><strong>Email</strong>: {{email}}</p>
    <p><strong>Phone</strong>: {{phone}}</p>
    <address>
    {{address.street}}<br />
    {{address.city}}<br />
    {{address.state}}
    </address>
  `,
})
export class AppComponent {
  name: string;
  email: string;
  phone: string;
  address: AddressInt;

  constructor() {
    this.name = 'Jewel Ahmed';
    this.email = 'tojibon@gmail.com';
    this.phone = '01717491469';
    this.address = {
      street: '54 Block G, Rampura Meradiya',
      city: 'Banasree',
      state: 'Dhaka',
    }
  }
}

interface AddressInt {
  street: string;
  city: string;
  state: string;
}
