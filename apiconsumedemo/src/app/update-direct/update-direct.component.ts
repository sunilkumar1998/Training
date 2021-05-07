import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-update-direct',
  templateUrl: './update-direct.component.html',
  styleUrls: ['./update-direct.component.css']
})
export class UpdateDirectComponent implements OnInit {

  productdelete: Product;
  loginForm: FormGroup;
  productitems: Observable<Product[]>;
  items: Observable<Product[]>;
  id: number;
  showform: FormGroup;
  product: Product;
  showotherfields: boolean = false;
  targetId:number;
  

  constructor(private fb:FormBuilder,private myservice:AppService, private router:Router,private route:ActivatedRoute ) {
    this.showform= this.fb.group({
      id : [null,[Validators.required,]],
      title : ['',[Validators.required]],
      Price : [null,[Validators.required,]],
      Quantity : [null,[Validators.required]],
      color : [null,[Validators.required]],
      isInstock : [true,[Validators.required]],
      expDate: [null,[Validators.required,]],
    
          
    })
  
   }

  ngOnInit(): void {
    
  }
  Update(){
    let recordToUpdate:Product={
      ...this.showform.value
    };
    recordToUpdate.id=this.targetId;
        console.log(recordToUpdate);
    this.myservice.updateRecord(recordToUpdate).subscribe();
    console.log("Record successfully Updated");

  }
  
  showfullform(){
    this.showotherfields=true;
    console.log(this.targetId)
    this.myservice.getProduct(this.targetId).subscribe(
      data => {
        console.log(data);
        this.showform.get('title')?.setValue(data.title);
        this.showform.get('Price')?.setValue(data.price);
        this.showform.get('Quantity')?.setValue(data.quantity);
        this.showform.get('color')?.setValue(data.color);
        this.showform.get('expDate')?.setValue(data.expDate);
        this.showform.get('isInstock')?.setValue(data.isInstock);
      }
    );
  }

  reset() {
    this.loginForm.reset();
  }
}
