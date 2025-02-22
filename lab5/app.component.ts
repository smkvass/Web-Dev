import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from './product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,  ProductListComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = ['Помады', 'Тушь для ресниц','Румяна', 'Пудра'];
  selectedCategory: string = "";

  products: {[key: string]: Product[]} = {
    'Помады': [
    { name: 'Relouis Nude Matte', rate: 4.9, description:'Жидкая помада 22', image: 'assets/IMG_1908.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Помады', likes: 0 },
    { name: 'Clinique Almost Lipstick', rate: 4.9, description:'Помада Black Honey', image: 'assets/IMG_1910.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Помады', likes: 0 },
    { name: 'Maybelline Superstay', rate: 4.9, description:'Жидкая помада розовый', image:'assets/IMG_1916.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Помады', likes: 0 },
    { name: 'NYX Soft Matte', rate: 5.0, description:'Помада розовый', image:'assets/IMG_1920.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Помады', likes: 0 },
    { name: 'Rom&Nd Zero', rate: 4.9, description:'Помада бежевый', image:'assets/IMG_1922.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Помады', likes: 0 }
  ],
  'Тушь для ресниц': [
    { name: 'Vivienne Sabo Cabaret Premiere', rate: 4.9, description:'Для объема, подкручивающая черный', image: 'assets/IMG_2134.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Тушь для ресниц', likes: 0 },
    { name: 'Loreal Paris Telescopic Explosion', rate: 5.0, description:'Для объема, удлиняющая черный', image: 'assets/IMG_2137.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Тушь для ресниц', likes: 0 },
    { name: 'Farmstay Visible Difference Volume Up', rate: 4.8, description:'Для объема черный', image: 'assets/IMG_2139.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Тушь для ресниц', likes: 0 },
    { name: 'Vivienne Sabo Cabaret Latex', rate: 4.9, description:'Для объема черный', image: 'assets/IMG_2141.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Тушь для ресниц', likes: 0 },
    { name: 'Maybelinne New York Sky High limited', rate: 4.5, description:'Для объема черный', image: 'assets/IMG_2143.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Тушь для ресниц', likes: 0 }
  ],
  'Румяна': [
    { name: 'Belor design', rate: 4.9, description:'Румяна 01', image: 'assets/IMG_2145.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Румяна', likes: 0 },
    { name: 'Catrice Cheek Lover Marbled', rate: 4.9, description:'Румяна 010', image: 'assets/IMG_2147.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Румяна', likes: 0 },
    { name: 'Dior Backstage Glow Face Palette', rate: 4.9, description:'Румяна, хайлайтер 001 Universal', image: 'assets/IMG_2150.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Румяна', likes: 0 },
    { name: 'RELOUIS PRO Blush', rate: 4.9, description:'Румяна 73 Juicy peach', image: 'assets/IMG_2152.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Румяна', likes: 0 },
    { name: 'Rare Beauty Soft Pinch', rate: 4.9, description:'Румяна Hope', image: 'assets/IMG_2154.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Румяна', likes: 0 },
  ],
  'Пудра':[
    { name: 'Coty Airspun Loose Face Powder', rate: 4.6, description:'Рассыпчатая 070-41 Translucent', image: 'assets/IMG_2156.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Пудра', likes: 0 },
    { name: 'RELOUIS HD Powder Fixing', rate: 4.2, description:'Рассыпчатая 01 белый', image: 'assets/IMG_2158.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Пудра', likes: 0 },
    { name: 'PUPA Luminys Silky Baked Face Powder', rate: 4.9, description:'Сухая 01 светло-бежевый', image: 'assets/IMG_2160.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Пудра', likes: 0 },
    { name: 'KIKO Universal Veil Translucent Finishing', rate: 4.7, description:'Сухая 01 прозрачный', image: 'assets/IMG_2163.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Пудра', likes: 0 },
    { name: 'Charlotte Tilbury AirBrush Flawless Finish Powder', rate: 5.0, description:'Сухая, светло-бежевый', image: 'assets/IMG_2165.jpg', whatsappLink:'https://wa.me/77472237293', telegramLink: 'https://t.me/smkvass', category: 'Пудра', likes: 0 },
  ]
  };
  selectCategory(category: string){
    this.selectedCategory = category;
  }
}


