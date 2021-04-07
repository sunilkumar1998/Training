import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { AsyncsubjectComponent } from './asyncsubject/asyncsubject.component';
import { AttributedirectiveComponent } from './attributedirective/attributedirective.component';
import { BehavioursubjectComponent } from './behavioursubject/behavioursubject.component';
import { ErrorhandlingComponent } from './errorhandling/errorhandling.component';
import { HomeComponent } from './home/home.component';
import { Input1Component } from './input1/input1.component';
import { Input2Component } from './input2/input2.component';
import { LoginformComponent } from './loginform/loginform.component';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { ReplaysubjectComponent } from './replaysubject/replaysubject.component';
import { ShareDataComponent } from './sd.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectsInAngularComponent } from './subjects-in-angular/subjects-in-angular.component';

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

    {
        path: 'loginform',
        component:LoginformComponent,
    },
    {
        path: 'replay',
        component:ReplaysubjectComponent,
    },

    {
        path: 'mysubject',
        component:SubjectsInAngularComponent,
        children : [
            {
                path: 'subject',
                component:SubjectComponent,
            },
        
            {
                path: 'behavioursubject',
                component:BehavioursubjectComponent,
            },

            {
                path: 'replaysubject',
                component:ReplaysubjectComponent,
            },
        
            {
                path: 'asyncsubject',
                component:AsyncsubjectComponent,
            },
        

        ]
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