import { Component, Input, input , inject } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {

  @Input() product: any = {};
  currentQuantity:number = 0;

  productservice = inject(ProductService)


  // arr = new Array();

  // ngOnInit(){
  //   const rating:number = this.product.rating
  //   this.arr = new Array(Number(rating.toFixed()));
  //   console.log(this.arr)

  // }

  addToCart(event:Event, id:number){
    event.stopPropagation();
    console.log("inside add to cart")
    this.currentQuantity++;
    const payload = {
      productId : id,
      quantity: this.currentQuantity
    }
    this.productservice.addProductToCart(payload);

    
  }
}
