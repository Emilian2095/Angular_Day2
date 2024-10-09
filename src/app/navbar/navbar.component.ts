import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  number: number = 0;
addMoney(){
  if (this.number >=200) {
    
  }else{
    this.number += 10;
  }

}
}
