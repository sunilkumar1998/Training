import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'My Angular Learning Demo';


  showDataBindingDemo=true;
  showDirectiveDemo=false;
  showproductcomponent=false;
  showpurchasecomponent=false;
  showinput1component=false;
  showinput2component=false;

  showdbdemo():void
  {
    this.showDataBindingDemo=true;
    this.showproductcomponent=false;
    this.showDirectiveDemo=false;
    
  this.showpurchasecomponent=false;
  }

  showProduct():void{
    this.showDataBindingDemo=false;
    this.showproductcomponent=true;
    this.showDirectiveDemo=false;
    this.showpurchasecomponent=false;
  }

  showdirectivedemo():void{
    this.showDataBindingDemo=false;
    this.showDirectiveDemo=true;
    this.showproductcomponent=false;
    this.showpurchasecomponent=false;

  }

  showpurchasedemo(): void
  {
    this.showpurchasecomponent=true;
    this.showDataBindingDemo=false;
    this.showDirectiveDemo=false;
    this.showproductcomponent=false;

  }

  showinputdata():void
  {
    this.showpurchasecomponent=false;
    this.showDataBindingDemo=false;
    this.showDirectiveDemo=false;
    this.showproductcomponent=false;

    this.showinput1component=true;
  this.showinput2component=true;

  }

  
}
