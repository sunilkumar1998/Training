import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  UpdateForm:FormGroup;
  productToUpdate : any;

  constructor(private fb:FormBuilder,private myservice:AppService, private router:Router,private route:ActivatedRoute ) {
    this.UpdateForm= this.fb.group({
      id : [null,[Validators.required,]],
      title : ['',[Validators.required]],
      Price : [null,[Validators.required,]],
      Quantity : [null,[Validators.required]],
      color : [null,[Validators.required]],
      isInstock : [true,[Validators.required]],
      expDate: [null,[Validators.required,]],
    
          
    })
    this.productToUpdate = this.route.snapshot.paramMap.get('id');
    console.log(this.productToUpdate)
   }

  ngOnInit(): void {
    this.myservice.getProduct(this.productToUpdate).subscribe(
      data => {
        console.log(data);
        this.UpdateForm.get('title')?.setValue(data.title);
        this.UpdateForm.get('Price')?.setValue(data.price);
        this.UpdateForm.get('Quantity')?.setValue(data.quantity);
        this.UpdateForm.get('color')?.setValue(data.color);
        this.UpdateForm.get('expDate')?.setValue(data.expDate);
        this.UpdateForm.get('isInstock')?.setValue(data.isInstock);
      }
    );
  }
  Update(){
    let recordToUpdate:Product={
      ...this.UpdateForm.value
    };
    recordToUpdate.id=parseInt(this.productToUpdate);
        console.log(recordToUpdate);
    this.myservice.updateRecord(recordToUpdate).subscribe();
    console.log("Record successfully Updated");

  }

}
