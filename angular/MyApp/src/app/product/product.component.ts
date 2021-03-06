import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MyErrorhandlerService } from '../my-errorhandler.service';
import { IProduct } from './Iproduct';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

value:string;
pricevalue:number;
showTable: boolean = true;
  
   products: IProduct[] = [];
  constructor( private dataservice: DataService) { }

  ngOnInit(): void {
      this.products=this.dataservice.getProducts();
  }

  
  displayedColumns: string[] = ['ID', 'Name', 'Price', 'Quantity', 'Expiry Date'];

}
  

  // getProducts(): IProduct[]
  // {
  //   return[

  //    {
  //     Id:1,
  //     Title:"Pen",
  //     Price:56,
  //     ExpiryDate:"09-2-2020",
  //     isInstock:true,
  //     Quantity:370
  
  //    },

  //    {
  //     Id:2,
  //     Title:"Pencil",
  //     Price:16,
  //     ExpiryDate:"01-04-2010",
  //     isInstock:false,
  //     Quantity:20
  
  //    },

  //    {
  //     Id:3,
  //     Title:"paper",
  //     Price:10,
  //     ExpiryDate:"12-2-2020",
  //     isInstock:true,
  //     Quantity:400
  
  //    },

  //    {
  //     Id:4,
  //     Title:"Eraser",
  //     Price:129,
  //     ExpiryDate:"02-10-2020",
  //     isInstock:true,
  //     Quantity:40
  
  //    },

  //    {
  //     Id:5,
  //     Title:"scale",
  //     Price:70,
  //     ExpiryDate:"6-12-2020",
  //     isInstock:false,
  //     Quantity:240
  
  //    },
  //   ]
  // }

