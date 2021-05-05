import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-app-product',
  templateUrl: './app-product.component.html',
  styleUrls: ['./app-product.component.css']
})
export class AppProductComponent implements OnInit {
  AddProductForm:FormGroup;
  

 
 
  
  constructor(private fb:FormBuilder,private myservice:AppService, private router:Router){
    this.AddProductForm= this.fb.group({        
      title : ['',[Validators.required]],
      Price : [null,[Validators.required,]],
      Quantity : [null,[Validators.required]],
      color : [null,[Validators.required]],
      isInstock : [true,[Validators.required]],
      expDate: [null,[Validators.required,]],
 
    });
   
  }


  ngOnInit(): void {
   
  }

  submit(){
    let recordToAdd:Product={
      ...this.AddProductForm.value
    };
    recordToAdd.id=0;
    console.log(recordToAdd);
    this.myservice.addProductRecord(recordToAdd).subscribe();
    console.log("Record successfully Added");
      
    }
  }
  
