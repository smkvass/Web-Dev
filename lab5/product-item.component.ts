import { Component , Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../product';
@Component({
  selector: 'app-product-item',
  imports: [],
  standalone:true,
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<Product>();

  likeProduct() {
    this.product.likes++;
  }
  deleteProduct() {
    this.remove.emit(this.product);
  }
  
}
