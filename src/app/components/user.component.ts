import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <h1>Hello {{name}}</h1>
    <p><strong>Email</strong>: {{email}}</p>
    <p><strong>Phone</strong>: {{phone}}</p>
    <address>
    {{address.street}}<br />
    {{address.city}}<br />
    {{address.state}}
    </address>
    <button (click)="showHobbies()">Show Hobbies</button>
    <ul *ngIf="displayHobbies">
      <li *ngFor="let hobby of hobbies; let i = index;">
        {{hobby}} <button (click)="deleteHobby(i)">X</button>
      </li>
    </ul>
    <hr />
    <h3>Add Hobby</h3>
    <form (submit)="addHobby(hobby.value)">
      <label>Hobby: </label>
      <input type="text" #hobby /><br />
    </form>
    <hr />
    <h3>Edit User</h3>
    <label>Name: </label>
    <input type="text" name="name" [(ngModel)]="name" /><br />
    <label>Email: </label>
    <form>
      <input type="email" name="email" [(ngModel)]="email" /><br />
      <label>Phone: </label>
      <input type="text" name="phone" [(ngModel)]="phone" /><br />
      <label>Street: </label>
      <input type="text" name="address.street" [(ngModel)]="address.street" /><br />
      <label>City: </label>
      <input type="text" name="address.city" [(ngModel)]="address.city" /><br />
      <label>State: </label>
      <input type="text" name="address.state" [(ngModel)]="address.state" /><br />
    </form>
  `,
})
export class UserComponent {
  name: string;
  email: string;
  phone: string;
  address: AddressInt;
  hobbies: string[];
  displayHobbies: boolean;

  constructor() {
    this.name = 'Jewel Ahmed';
    this.email = 'tojibon@gmail.com';
    this.phone = '01717491469';
    this.address = {
      street: '54 Block G, Rampura Meradiya',
      city: 'Banasree',
      state: 'Dhaka',
    };
    this.hobbies = ['Programming', 'Music', 'Travel'];
    this.displayHobbies = false;
  }

  showHobbies() {
    this.displayHobbies = !this.displayHobbies;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  deleteHobby(i) {
    this.hobbies.splice(i, 1);
  }
}

interface AddressInt {
  street: string;
  city: string;
  state: string;
}
