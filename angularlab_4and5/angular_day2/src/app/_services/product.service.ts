import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core"; 
import { Event } from "@angular/router";

import { options } from "joi";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "../_models/product.model";
@Injectable({providedIn:'root'})
export class ProductService{

    itemAdded:EventEmitter<Product>=new EventEmitter<Product>();
    itemDeleted:EventEmitter<Product>=new EventEmitter<Product>();
    constructor(private httpClient:HttpClient){
    }

    // productArray:Product[]=[
    //     {id:1,data:[{id:1,name:"product 1",description:"product 1 description ",lang:{id:1,name:"English"}}],price:100,category:{id:1,name:"category 1"},discount:10,imegesUrls:['https://picsum.photos/200/100'],quantity:1,paymentTypes:[{id:1,name:"visa"}],tags:[{id:1,name:"tag 1"},{id:2,name:"tag 2"}]},
    //     {id:2,data:[{id:2,name:"product 2",description:"product 2 description ",lang:{id:2,name:"English"}}],price:200,category:{id:2,name:"category 1"},discount:30,imegesUrls:['https://picsum.photos/200/200'],quantity:1,paymentTypes:[{id:2,name:"visa"}],tags:[{id:2,name:"tag 1"},{id:3,name:"tag 3"}]},
    //     {id:3,data:[{id:3,name:"product 3",description:"product 3 description ",lang:{id:3,name:"English"}}],price:30000,category:{id:3,name:"category 1"},imegesUrls:['https://picsum.photos/200/300'],quantity:1,paymentTypes:[{id:3,name:"visa"}],tags:[{id:3,name:"tag 1"},{id:4,name:"tag 4"}]},
    //    {id:4,data:[{id:4,name:"product 4",description:"product 4 description ",lang:{id:4,name:"English"}}],price:10000,category:{id:4,name:"category 1"},discount:500,imegesUrls:['https://picsum.photos/200/400'],quantity:1,paymentTypes:[{id:4,name:"visa"}],tags:[{id:4,name:"tag 1"},{id:5,name:"tag 5"}]},
    //    {id:5,data:[{id:5,name:"product 5",description:"product 5 description ",lang:{id:5,name:"English"}}],price:10000,category:{id:5,name:"category 1"},discount:500,imegesUrls:['https://picsum.photos/200/500'],quantity:1,paymentTypes:[{id:5,name:"visa"}],tags:[{id:5,name:"tag 1"},{id:6,name:"tag 6"}]},
    //    {id:6,data:[{id:6,name:"product 6",description:"product 6 description ",lang:{id:6,name:"English"}}],price:10000,category:{id:6,name:"category 1"},imegesUrls:['https://picsum.photos/200/600'],quantity:1,paymentTypes:[{id:6,name:"visa"}],tags:[{id:6,name:"tag 1"},{id:7,name:"tag 7"}]},
    //    {id:7,data:[{id:7,name:"product 7",description:"product 7 description ",lang:{id:7,name:"English"}}],price:10000,category:{id:7,name:"category 1"},discount:500,imegesUrls:['https://picsum.photos/200/700'],quantity:1,paymentTypes:[{id:7,name:"visa"}],tags:[{id:7,name:"tag 1"},{id:8,name:"tag 8"}]},
    //    {id:8,data:[{id:8,name:"product 8",description:"product 8 description ",lang:{id:8,name:"English"}}],price:10000,category:{id:8,name:"category 1"},discount:500,imegesUrls:['https://picsum.photos/200/800'],quantity:1,paymentTypes:[{id:8,name:"visa"}],tags:[{id:8,name:"tag 1"},{id:9,name:"tag 9"}]},
    //    {id:9,data:[{id:9,name:"product 9",description:"product 9 description ",lang:{id:9,name:"English"}}],price:10000,category:{id:9,name:"category 1"},imegesUrls:['https://picsum.photos/200/00'],quantity:1,paymentTypes:[{id:9,name:"visa"}],tags:[{id:9,name:"tag 1"},{id:10,name:"tag 10"}]}
    //     ]

    cartArray:Product[]=[];

getAllProducts():Observable<{product:Product[],numberOfProducts:number}>{
    const token:string=localStorage.getItem('token')!;
    const headers= new HttpHeaders({
        authorization:token
    });
 return  this.httpClient.get<{product:Product[],numberOfProducts:number}>(`${environment.baseUrl}product`,{headers});
}

getProductById(id:string):Observable<Product>{

    return this.httpClient.get<Product>(environment.baseUrl+'product/'+id)
}
// addProduct(product:Product):void{

// this.productArray.push(product);
// }

// deleteProduct(id:number){

//   return  this.productArray.filter(item=>item.id!=id)
// }
// addItemToCart(product:Product):Product[]{
//     this.cartArray.push(product);
// return [...this.cartArray,product];

// }
// updateProduct(){

//     return this.productArray
// }


}
