import { Component, Input, input } from '@angular/core';


@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  @Input() products: any[] = [];

}
