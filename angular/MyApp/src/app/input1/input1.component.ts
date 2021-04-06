import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IProduct } from '../product/Iproduct';
import { SharedataService } from '../sharedata.service';


function priceRangeValidator(min:number, max:number):ValidatorFn{
  return (control:AbstractControl):{[key:string]: boolean} | null=>{
  if(control.value !==undefined && (isNaN(control.value)) || control.value<= min || control.value>max)
  {
    return {'priceRange': true};
  }
  return null;
}
}

function QuantityRangeValidator(min:number, max:number):ValidatorFn{
  return (control:AbstractControl):{[key:string]: boolean} | null=>{
  if(control.value !==undefined && (isNaN(control.value)) || control.value<= min || control.value>max)
  {
    return {'QuantityRange': true};
  }
  return null;
}
}

function stockValidator(min:number, max:number):ValidatorFn{
  return (control:AbstractControl):{[key:string]: boolean} | null=>{
  if(control.value !==undefined && (isNaN(control.value)) || control.value<= min || control.value>max)
  {
    return {'QuantityRange': true};
  }
  return null;
}
}

@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.css']
})
export class Input1Component implements OnInit {
  min=0;
  max=1000;
  
  product:IProduct;
  constructor(private ShareData: SharedataService) { }

  dataform:FormGroup;
  
  


  ngOnInit(): void {
    // this.ShareData.setData(this.message1);
    // this.message1=this.ShareData.getData();
    this.ShareData.product$.subscribe(data=>{
      this.product=data;
    })

    this.dataform= new FormGroup({
      Id: new FormControl(this.product?.Id, [Validators.required]),
      Title: new FormControl(this.product?.Title, [Validators.required]),
      Price: new FormControl(this.product?.Price, [priceRangeValidator(this.min,this.max), Validators.required]),
      Quantity: new FormControl(this.product?.Quantity, [QuantityRangeValidator(this.min,this.max), Validators.required]),
      ExpiryDate: new FormControl(this.product?.ExpiryDate, [Validators.required]),
      isInstock:new FormControl(this.product?.isInstock,[Validators.required]),

    })
  }

  updateproduct(){
    console.log(this.dataform.value);
    this.ShareData.updateProduct(this.dataform.value);
  }
  cancel(){
    this.dataform.reset();
  }
  
  // setPrice(): void {
  //   this.ShareData.setData(this.price);
  // }

}
