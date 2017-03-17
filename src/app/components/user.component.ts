import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: './user.component.html'
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
