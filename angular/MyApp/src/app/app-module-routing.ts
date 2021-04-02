import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { StructuredirectiveComponent } from './structuredirective/structuredirective.component';
import { TshirtdatabindingComponent } from './tshirtdatabinding/tshirtdatabinding.component';
const routes: Routes = [
    {
        path: '',redirectTo:'Tshirt-UI',pathMatch:'full'
    },
    {
        path: 'Tshirt-UI',
        component:TshirtdatabindingComponent,
    },
    {
        path: 'Product-UI',
        component:ProductComponent,
    },

    {
        path: 'Structure-UI',
        component:StructuredirectiveComponent,
    },

    {
        path: 'Purchase-UI',
        component:PurchaseComponent,
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