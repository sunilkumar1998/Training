import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Demo';


  showDataBindingDemo=true;
  showDirectiveDemo=false;
  showproductcomponent=false;
  showpurchasecomponent=false;

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

  
}
