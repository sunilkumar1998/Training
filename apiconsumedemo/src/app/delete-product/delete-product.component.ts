import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { AppService } from '../app.service';
import { Product } from '../product';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  // DeleteForm:FormGroup;
  // constructor(private fb:FormBuilder,private myservice:AppService, private router:Router) {
  //   this.DeleteForm= this.fb.group({
  //     id : [null,[Validators.required,]],

  //  });
  // }

  // ngOnInit(): void {
  // }

  // Delete(){
  //   let recordToUpdate={
  //     ...this.DeleteForm.value
  //   };
  //   console.log(recordToUpdate)
    
  //   console.log(recordToUpdate.id);
  //   this.myservice.DeleteRecord(recordToUpdate.id).subscribe();
  //   console.log("Record successfully Updated");

  // }


  productdelete: Product;
  loginForm: FormGroup;
  productitems: Observable<Product[]>;
  items: Observable<Product[]>;
  id: number;
  showform: FormGroup;
  product: Product;
  showotherfields: boolean = false;
  productToDelete : any;

  constructor(private appservice: AppService,private route:ActivatedRoute ) {
    this.loginForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
    }),
      this.items = new Observable<Product[]>();

    this.showform = new FormGroup({
      Title: new FormControl('', [Validators.required]),
      Price: new FormControl('',[Validators.required]),
      Quantity: new FormControl([Validators.min(0)]),
      Color: new FormControl('', [Validators.required]),
      expirydate: new FormControl('', [Validators.required]),
      instock: new FormControl(true, [Validators.required]),
    })
    this.productToDelete = this.route.snapshot.paramMap.get('id');
    this.appservice.getProduct(this.productToDelete).subscribe(
      data => {
        console.log(data);
        this.showform.get('Title')?.setValue(data.title);
        this.showform.get('Price')?.setValue(data.price);
        this.showform.get('Quantity')?.setValue(data.quantity);
        this.showform.get('Color')?.setValue(data.color);
        this.showform.get('expirydate')?.setValue(data.expDate);
        this.showform.get('instock')?.setValue(data.isInstock);
      }
    );
  }

  ngOnInit(): void {
    this.items = this.appservice.getProducts();
    
  }

  submit() {
    this.appservice.DeleteRecord(this.productToDelete).subscribe();
  }

  search() {
    this.showotherfields = true;
  }

  reset() {
    this.loginForm.reset();
  }

}
