import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
 cars: {name: string, price: number, img: string} []= [
  {
    name: "Bugatti",
    price: 500000,
    img: "images/bugati.webp"
  },
  {
    name: "Maseratti",
    price: 300000,
    img: "images/masserati.jpg"
  },{
    name: "Aston Martin",
    price: 250000,
    img: "images/astonMartin.jpg"
  },{
    name: "Bentley",
    price: 450000,
    img: "images/bentley.jpg"
  },{
    name: "Lamburghini",
    price: 170000,
    img: "images/lamburhini.jpg"
  },{
    name: "Ferrari",
    price: 230000,
    img: "images/ferari.jpg"
  }
]



}
