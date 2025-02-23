import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Product} from '../product';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productpictures: Product[] = [
    {name: 'Relouis Nude Matte', rate: 4.9, description:'Жидкая помада 22', image: 'assets/IMG_1908.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Помады', likes:0},
    {name:'Clinique Almost Lipstick', rate: 4.9, description: 'Помада розовый Black Honey', image: 'assets/IMG_1910.jpg',whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass' , category: 'Помады', likes:0},
    {name:'Vivienne Sabo Nude Createur', rate: 4.8, description:'Помада 08 нежный терракотовый', image:'assets/IMG_1912.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Помады', likes:0},
    {name:'Paese The Kiss Lips', rate:4.0, description:'Жидкая помада бордовый 03', image:'assets/IMG_1914.jpg',whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Помады', likes:0},
    {name:'Maybelline New York Superstay Vinyl Ink', rate: 4.9,description:'Жидкая помада розовый 35' ,image:'assets/IMG_1916.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Помады', likes:0},
  ];
}
