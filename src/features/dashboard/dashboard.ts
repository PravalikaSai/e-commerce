import { Component, inject, ChangeDetectorRef} from '@angular/core';
import { Authentication } from '../../services/authentication';
import { Router, RouterModule } from '@angular/router';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductService } from '../../services/product-service';
import { ProductResponse } from '../../models/global.model';
import { ProductModel, PageConfigModel } from '../../models/global.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  imports: [ProductCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  service = inject(Authentication)

  router = inject(Router)

  productservice = inject(ProductService)

  username = localStorage.getItem('username');

  products: any = [];

  cdr = inject(ChangeDetectorRef);

  pageConfig: PageConfigModel = new PageConfigModel();

  options: ProductModel = {
      page: 1,
      limit: 2
    }
  // options : ProductModel = new ProductModel();


  
  

  ngOnInit() {

    // this.options.page = 1;
    // this.options.limit = 2;

    console.log("options",this.options)

    this.productservice.products$.subscribe(res => {
      if (res?.data) {
        this.products = res?.data;
        console.log("Products: ", this.products)
        if(res?.pagination){
          this.pageConfig = res.pagination;
          console.log("pageConfig: ", this.pageConfig);
        }
        this.cdr.detectChanges();
      } else {
        this.products = [];
      }
    });

    this.getProducts(this.options);
  }

  logOut() {
    this.service.clearToken();
    this.router.navigate(['/login'])
  }

  getProducts(options:ProductModel) {
    
    this.productservice.getProducts(options);

  }

  previousPage(){
    console.log("inside previous")
     if (this.pageConfig.hasPreviousPage) {
      // this.options ={
      //   page : this.pageConfig.page - 1,
      //   limit: this.pageConfig.limit,
      // }

      this.options.page --;

      this.getProducts(this.options);
    }

  }

  nextPage(){
    console.log("inside next")
    if (this.pageConfig.hasNextPage) {
      // this.options ={
      //   page : this.pageConfig.page + 1,
      //   limit: this.pageConfig.limit,
      // }

      this.options.page ++;

      this.getProducts(this.options);
    }

  }

}
