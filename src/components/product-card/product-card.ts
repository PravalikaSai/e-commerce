import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  @Input() product: any = {};

  // arr = new Array();

  // ngOnInit(){
  //   const rating:number = this.product.rating
  //   this.arr = new Array(Number(rating.toFixed()));
  //   console.log(this.arr)

  // }
}
