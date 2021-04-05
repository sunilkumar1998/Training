import { Component, OnInit } from '@angular/core';
import { SharedataService } from '../sharedata.service';

@Component({
  selector: 'app-input1',
  templateUrl: './input1.component.html',
  styleUrls: ['./input1.component.css']
})
export class Input1Component implements OnInit {

  price: number;
  constructor(private ShareData: SharedataService) { }

  ngOnInit(): void {
    // this.ShareData.setData(this.message1);
    // this.message1=this.ShareData.getData();

  }

  setPrice(): void {
    this.ShareData.setPrice(this.price);
  }

}
