import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { IProduct } from './product/Iproduct';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {

  product:IProduct={
       Id:1,
      Title:"Pen",
      Price:56,
      ExpiryDate:"09-2-2020",
      isInstock:true,
      Quantity:370
    }

  product$ : BehaviorSubject<IProduct>
  constructor() { 

    this.product$=new BehaviorSubject(this.product);
  }
  // setData(price : number){
  //   this.product.Price = price; 
  //   this.product$.next(this.product); 
  // }

  updateProduct(p:IProduct){
    this.product={
      ...p
    }
    this.product$.next(this.product)
  }
}
