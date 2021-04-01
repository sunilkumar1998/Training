import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tshirtdatabinding',
  templateUrl: './tshirtdatabinding.component.html',
  styleUrls: ['./tshirtdatabinding.component.css']
})
export class TshirtdatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'My Tshirt';

  a=550;
  b=500;
  imgsource= "../assets/TshirtFront.jpg"

  setWidth():void
  {
    this.a=200;
    this.b=200;
  }

  setDefault():void
  {
    this.a=100;
    this.b=150;
  }

  changefront():void
  {
    this.imgsource="../assets/Tshirtback.jpg"
  }

  changeback():void
  {
    this.imgsource="../assets/TshirtFront.jpg"
  }
  

}
