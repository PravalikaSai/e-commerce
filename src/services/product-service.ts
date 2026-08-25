import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Service , signal} from '@angular/core';
import { ProductModel } from '../models/global.model';
import { ProductResponse } from '../models/global.model';
import { Token } from '@angular/compiler';
import { BehaviorSubject, Observable } from 'rxjs';

@Service()
export class ProductService {

    private productSubject = new BehaviorSubject<ProductResponse | null>(null);

    products$: Observable<ProductResponse | null> = this.productSubject.asObservable();

    baseUrl = "http://localhost:5000/";
    http = inject(HttpClient);

    productDetails = signal<any>([]);

    ngOnInit(){
         this.getProductById(1);
    }

    getProducts(data: ProductModel) {
       
        const token = localStorage.getItem("token");
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Notice the space after Bearer
            })
        };
        this.http.post<ProductResponse>(`${this.baseUrl}api/v1/products`, data, httpOptions).subscribe(
            {
                next: (response: ProductResponse) => {
                    this.productSubject.next(response);
                },
                error(error: any) {
                    console.log(error)
                }
            }



        )
    }

    getProductById(id:number){
        const token = localStorage.getItem("token");
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Notice the space after Bearer
            })
        };
        console.log("id is",id)
        this.http.post(`${this.baseUrl}api/v1/products/${id}`,{}, httpOptions).subscribe(
            {
                next:(response:any)=>{
                    this.productDetails.set(response?.data ? response.data : [] );
                    console.log('Signal Value:',this.productDetails());
                    
                },
                error:(err:any)=>{
                console.log(err);
                    
                }
            }
        )
    }
    addProductToCart(data:any){
        const token = localStorage.getItem("token");
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            })
        };
        this.http.post(`${this.baseUrl}api/v1/cart`, data,httpOptions).subscribe(
            {
                next:(response:any)=>{
                    
                    console.log("item added in to",response);
                    window.alert("item added")
                    
                },
                error:(err:any)=>{
                console.log(err);
                    
                }
            }
        )
    }
}
