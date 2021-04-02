import { Injectable } from '@angular/core';
import { IProduct } from './product/Iproduct';
import { IPurchaseitem } from './purchase/IPurchaseItem';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
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





  getProducts(): IProduct[]
  {
    return[

     {
      Id:1,
      Title:"Pen",
      Price:56,
      ExpiryDate:"09-2-2020",
      isInstock:true,
      Quantity:370
  
     },

     {
      Id:2,
      Title:"Pencil",
      Price:16,
      ExpiryDate:"01-04-2010",
      isInstock:false,
      Quantity:20
  
     },

     {
      Id:3,
      Title:"paper",
      Price:10,
      ExpiryDate:"12-2-2020",
      isInstock:true,
      Quantity:400
  
     },

     {
      Id:4,
      Title:"Eraser",
      Price:129,
      ExpiryDate:"02-10-2020",
      isInstock:true,
      Quantity:40
  
     },

     {
      Id:5,
      Title:"scale",
      Price:70,
      ExpiryDate:"6-12-2020",
      isInstock:false,
      Quantity:240
  
     },
    ]
  }
}
