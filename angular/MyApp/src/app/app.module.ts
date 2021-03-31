import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TshirtdatabindingComponent } from './tshirtdatabinding/tshirtdatabinding.component';
import { StructuredirectiveComponent } from './structuredirective/structuredirective.component';


@NgModule({
  declarations: [
    AppComponent,
    TshirtdatabindingComponent,
    StructuredirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
