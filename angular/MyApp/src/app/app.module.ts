import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TshirtdatabindingComponent } from './tshirtdatabinding/tshirtdatabinding.component';

import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatExpansionModule} from '@angular/material/expansion';
import { MyErrorhandlerService } from './my-errorhandler.service';
import { AppRoutingModule } from './app-routing-module-';
import { DataService } from './data.service';
import { Input1Component } from './input1/input1.component';
import { Input2Component } from './input2/input2.component';
import { ShareDataComponent } from './sd.component';
import { ChangeColorDirective } from './change-color.directive';
import { AttributedirectiveComponent } from './attributedirective/attributedirective.component';
import { ErrorhandlingComponent } from './errorhandling/errorhandling.component';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { MycustompipePipe } from './mycustompipe.pipe';
import { ProductsearchPipe } from './productsearch.pipe';

import {MatTableModule} from '@angular/material/table';
import { ReplaysubjectComponent } from './replaysubject/replaysubject.component';
import { SubjectComponent } from './subject/subject.component';
import { AsyncsubjectComponent } from './asyncsubject/asyncsubject.component';
import { BehavioursubjectComponent } from './behavioursubject/behavioursubject.component';
import { SubjectsInAngularComponent } from './subjects-in-angular/subjects-in-angular.component';


@NgModule({
  declarations: [
    AppComponent,
    TshirtdatabindingComponent,
    
    ProductComponent,
    PurchaseComponent,
    PurchaseOrderComponent,
    Input1Component,
    Input2Component,
    ShareDataComponent,
    ChangeColorDirective,
    AttributedirectiveComponent,
    ErrorhandlingComponent,
    HomeComponent,
    LoginformComponent,
    MycustompipePipe,
    ProductsearchPipe,
    ReplaysubjectComponent,
    SubjectComponent,
    AsyncsubjectComponent,
    BehavioursubjectComponent,
    SubjectsInAngularComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,ReactiveFormsModule,AppRoutingModule,
    MatTableModule,
  ],
  providers: [{provide:ErrorHandler, useClass:MyErrorhandlerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
