import { Component,inject, effect  } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails {

  productId:number = 0; 

  productService = inject(ProductService);

  route = inject(ActivatedRoute);

  product = this.productService.productDetails; //signal referance
     
  constructor() {
    // 2. Put your data arrival log inside an effect block!
    // This will trigger automatically the exact millisecond the data loads.
    effect(() => {
      console.log(" Data inside Signal:", this.product());
    });
  }

  ngOnInit(){
     
    const idParam = this.route.snapshot.paramMap.get('id');
    if(idParam){
      this.productId = +idParam;
      console.log("current id",this.productId)
    }
    this.productService.getProductById(this.productId);
  }





}
