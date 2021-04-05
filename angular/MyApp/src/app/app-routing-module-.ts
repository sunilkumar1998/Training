import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributedirectiveComponent } from './attributedirective/attributedirective.component';
import { ErrorhandlingComponent } from './errorhandling/errorhandling.component';
import { HomeComponent } from './home/home.component';
import { Input1Component } from './input1/input1.component';
import { Input2Component } from './input2/input2.component';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ShareDataComponent } from './sd.component';

import { TshirtdatabindingComponent } from './tshirtdatabinding/tshirtdatabinding.component';
const routes: Routes = [
    {
        path: '',redirectTo:'Tshirt-UI',pathMatch:'full'
    },

    {
        path: 'Home',
        component:HomeComponent,
    },

    {
        path: 'Tshirt',
        component:TshirtdatabindingComponent,
    },
    {
        path: 'Product',
        component:ProductComponent,
    },

    {
        path: 'attribute',
        component:AttributedirectiveComponent,
    },

    {
        path: 'Purchase',
        component:PurchaseComponent,
    },

    {
        path: 'sharedatawithservice',
        component:ShareDataComponent,
    },

    {
        path: 'globalerrorhandling',
        component:ErrorhandlingComponent,
    },



];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }