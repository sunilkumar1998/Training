import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Iuser } from '../user';


function ageRangeValidator(min:number, max:number):ValidatorFn{
  return (control:AbstractControl):{[key:string]: boolean} | null=>{
  if(control.value !==undefined && (isNaN(control.value)) || control.value< min || control.value>max)
  {
    return {'ageRange': true};
  }
  return null;
}
}

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})



export class LoginformComponent implements OnInit {

  loginform:FormGroup;
  min=18;
  max=45;
  user:Iuser={
    email:'abc@xyz',
    password:'123456',
    age:22
  }
  

  

  ngOnInit(): void {
    this.loginform= new FormGroup({
      email: new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required, Validators.minLength(5)]) ,
      age:new FormControl(null, [ageRangeValidator(this.min,this.max)]),
      phonenumber: new FormControl(null,[]),
      notification: new FormControl('email',[]),

    });
    this.formControlValueChanged();
  }

  login(){
    console.log(this.loginform.value);
    console.log(this.user);
  }
  cancel(){
    this.loginform.reset();
  }

  formControlValueChanged(){
    const phoneControl=this.loginform?.get('phonenumber');

    this.loginform.get('notification')?.valueChanges.subscribe((data:string)=>{
      console.log(data);

      if(data === 'phone'){
        phoneControl?.setValidators([Validators.required]);
      }

      else if(data ==='email'){
        phoneControl?.clearValidators();
      }
      phoneControl?.updateValueAndValidity();
    })
  }



}
