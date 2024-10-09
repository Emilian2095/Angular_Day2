import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  contactForm = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('',Validators.required ),
    email: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
  })

  onSubmit(){
    if (this.contactForm.valid) {
      console.log('valid');
      let fname =this.contactForm.value.fname;
      let lname = this.contactForm.value.lname;
      let email = this.contactForm.value.email;
      let age = this.contactForm.value.age;
      if(fname && lname && email&& age){

      }
      
    }
  }
}
