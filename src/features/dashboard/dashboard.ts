import { Component, inject } from '@angular/core';
import { Authentication } from '../../services/authentication';
import { Router, RouterModule } from '@angular/router';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductService } from '../../services/product-service';
import { ProductResponse } from '../../models/global.model';
import { ProductModel } from '../../models/global.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  imports: [ProductCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  // products = [
  //   {
  //     "id": 1,
  //     "name": "Premium Wireless Headphones",
  //     "slug": "premium-wireless-headphones",
  //     "category": "electronics",
  //     "price": 14999,
  //     "currency": "INR",
  //     "stoccd ..k": 42,
  //     "rating": 4.7,
  //     "brand": "NovaSound",
  //     "description": "High-fidelity wireless headphones with active noise cancellation.",
  //     "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
  //   },
  //   {
  //     "id": 2,
  //     "name": "Premium Wireless Headphones",
  //     "slug": "premium-wireless-headphones",
  //     "category": "electronics",
  //     "price": 14999,
  //     "currency": "INR",
  //     "stoccd ..k": 42,
  //     "rating": 4.7,
  //     "brand": "NovaSound",
  //     "description": "High-fidelity wireless headphones with active noise cancellation.",
  //     "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
  //   },
  //   {
  //     "id": 3,
  //     "name": "Premium Wireless Headphones",
  //     "slug": "premium-wireless-headphones",
  //     "category": "electronics",
  //     "price": 14999,
  //     "currency": "INR",
  //     "stoccd ..k": 42,
  //     "rating": 4.7,
  //     "brand": "NovaSound",
  //     "description": "High-fidelity wireless headphones with active noise cancellation.",
  //     "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
  //   },
  //   {
  //     "id": 4,
  //     "name": "Premium Wireless Headphones",
  //     "slug": "premium-wireless-headphones",
  //     "category": "electronics",
  //     "price": 14999,
  //     "currency": "INR",
  //     "stoccd ..k": 42,
  //     "rating": 4.7,
  //     "brand": "NovaSound",
  //     "description": "High-fidelity wireless headphones with active noise cancellation.",
  //     "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
  //   },
  //   {
  //     "id": 5,
  //     "name": "Premium Wireless Headphones",
  //     "slug": "premium-wireless-headphones",
  //     "category": "electronics",
  //     "price": 14999,
  //     "currency": "INR",
  //     "stoccd ..k": 42,
  //     "rating": 4.7,
  //     "brand": "NovaSound",
  //     "description": "High-fidelity wireless headphones with active noise cancellation.",
  //     "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
  //   },
  //   {
  //     "id": 6,
  //     "name": "Premium Wireless Headphones",
  //     "slug": "premium-wireless-headphones",
  //     "category": "electronics",
  //     "price": 14999,
  //     "currency": "INR",
  //     "stoccd ..k": 42,
  //     "rating": 4.7,
  //     "brand": "NovaSound",
  //     "description": "High-fidelity wireless headphones with active noise cancellation.",
  //     "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
  //   },
  //   {
  //     "id": 7,
  //     "name": "Premium Wireless Headphones",
  //     "slug": "premium-wireless-headphones",
  //     "category": "electronics",
  //     "price": 14999,
  //     "currency": "INR",
  //     "stoccd ..k": 42,
  //     "rating": 4.7,
  //     "brand": "NovaSound",
  //     "description": "High-fidelity wireless headphones with active noise cancellation.",
  //     "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
  //   },
  //   {
  //     "id": 8,
  //     "name": "Premium Wireless Headphones",
  //     "slug": "premium-wireless-headphones",
  //     "category": "electronics",
  //     "price": 14999,
  //     "currency": "INR",
  //     "stoccd ..k": 42,
  //     "rating": 4.7,
  //     "brand": "NovaSound",
  //     "description": "High-fidelity wireless headphones with active noise cancellation.",
  //     "imageUrl": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D"
  //   }
  // ]

  service = inject(Authentication)

  router = inject(Router)

  productservice = inject(ProductService)

  username = localStorage.getItem('username');

  products: any = [];



  options: ProductModel = {
    page: 1,
    limit: 10
  }

  ngOnInit() {

    this.productservice.products$.subscribe(res => {
      if (res?.data) {
        this.products = res?.data;
        console.log("Products: ", this.products)
      } else {
        this.products = [];
      }
    })


    this.getProducts();
  }

  logOut() {
    this.service.clearToken();
    this.router.navigate(['/login'])
  }

  getProducts() {
    const options: ProductModel = {
      page: 1,
      limit: 10
    }
    this.productservice.getProducts(options);

  }

}
