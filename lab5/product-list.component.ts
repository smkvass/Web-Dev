/*import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: any[] = [];
}
*/
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component'; 

@Component({
  selector: 'app-product-list',
  standalone: true, 
  imports: [CommonModule, ProductItemComponent], // Добавляем ProductItemComponent
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: any[] = [];

  removeProduct(productToRemove: any) {
    this.products = this.products.filter(product => product !== productToRemove);
  }
}

