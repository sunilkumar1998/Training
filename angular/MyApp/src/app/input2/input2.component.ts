import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product/Iproduct';
import { SharedataService } from '../sharedata.service';

@Component({
  selector: 'app-input2',
  templateUrl: './input2.component.html',
  styleUrls: ['./input2.component.css']
})
export class Input2Component implements OnInit {

  product : IProduct; 
  constructor(private ShareData: SharedataService) { }

  ngOnInit(): void {
     this.ShareData.product$.subscribe(p=>{
       this.product = p; 
     })
  }
}
