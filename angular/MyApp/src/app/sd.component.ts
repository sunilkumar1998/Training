import { Component } from "@angular/core";

const template = `
 <div class="row">
  <div class="col-md-6">
  <app-input1></app-input1>
   </div>
   <div class="col-md-6">
   <app-input2></app-input2>
   </div>
 </div>

 <br><br><br><br><br>
<br><br><br><br><br>
<br><br><br><br><br>

<p class="text-center" style="color: blue;">NOTE: This is an example of reactive programming where we are using a service whth an object of behaviour subject type which itself tell about any change in its state <br>
  here were have a property of type Iproduct and we are updating its price by calli8ng the function in a component and displaying the complete Iproduct data in another component.
</p>
`

@Component({
    selector:'app-shareddata',
    template:template
})
export class ShareDataComponent{

}