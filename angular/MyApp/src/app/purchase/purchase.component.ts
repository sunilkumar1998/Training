import { Component, OnInit } from '@angular/core';
import { IPurchaseitem } from './IPurchaseItem';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  purchases: IPurchaseitem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.purchases=this.getPurchase();
  }

  getPurchase():IPurchaseitem[]
  {

    return[
     {
        PurchaseId:101,
      PurchaseName:"Mouse",
      Purchasedate:"1-12-2019",
      VendorName:"abc",
      Items:[
        {
        Id:1,
        Title:"Pen",
        Price:56,
        ExpiryDate:"09-2-2020",
        isInstock:true,
        Quantity:370},

        {
          Id:1,
          Title:"Pen",
          Price:56,
          ExpiryDate:"09-2-2020",
          isInstock:true,
          Quantity:370},
  
        
      ],
     }, 
     

  {
    PurchaseId:102,
    PurchaseName:"Keyboard",
    Purchasedate:"1-12-2019",
    VendorName:"abc",
    
    Items:[
      {
        Id:2,
        Title:"Pencil",
        Price:16,
        ExpiryDate:"01-04-2010",
        isInstock:false,
        Quantity:20
    
       },

       {
        Id:1,
        Title:"Pen",
        Price:56,
        ExpiryDate:"09-2-2020",
        isInstock:true,
        Quantity:370},

    ]

  },

  {
    PurchaseId:103,
  PurchaseName:"LCD",
  Purchasedate:"1-12-2019",
  VendorName:"abc",
  Items:[
    {
    Id:1,
    Title:"Pen",
    Price:56,
    ExpiryDate:"09-2-2020",
    isInstock:true,
    Quantity:370}],
 },

 {
  PurchaseId:104,
PurchaseName:"CPU",
Purchasedate:"1-12-2019",
VendorName:"abc",
Items:[
  {
  Id:1,
  Title:"Pen",
  Price:56,
  ExpiryDate:"09-2-2020",
  isInstock:true,
  Quantity:370}],
},
 

    ]

    
  }

    
}
