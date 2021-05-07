import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable, Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-list-product-with-async',
  templateUrl: './list-product-with-async.component.html',
  styleUrls: ['./list-product-with-async.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ListProductWithAsyncComponent implements OnInit {
@Input() myProduct$: Observable<Product[]>;
constructor(){

}
ngOnInit():void{

}

  // items$:Observable<Product[]>;

  // productssubscription: Subscription;
  // constructor(private appservice: AppService){
  //   this.productssubscription= new Subscription();
  //   this.items$= new Observable<Product[]>();
  // }

  // ngOnInit(){
  //   // this.productssubscription= this.appservice.getProducts().subscribe(
  //   //   data=>{this.products= data},
  //   //   error=>{
  //   //     console.log(error);
  //   //   },
  //   //   ()=>console.log('complete')
      
  //   // )
  //   this.items$= this.appservice.getProducts();
  // }

  // ngOnDestroy(){
  //   if(this.productssubscription){
  //     this.productssubscription.unsubscribe();
  //   }

  //   }
  }


