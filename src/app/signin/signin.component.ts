import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from './login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

 
  displayTable:boolean=false; 
  submitData=[];


 registerForm: FormGroup;
    

    constructor(private readonly fb: FormBuilder,private readonly ls:LoginService, private readonly route:Router ) { }

    ngOnInit() {
        this.registerForm = this.fb.group({
         
            firstname: new FormControl(''),
            lastname: new FormControl('',Validators.required),
            mobilenumber: new FormControl('',[Validators.pattern( "^[0-9]{10}")]),
            email: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]),
           address: new FormControl(''),
          
        });
      // this.setFormdata();
        
    }


myEventFunction() {
  let firstName = this.registerForm.controls['firstname'].value;
  let lastName = this.registerForm.controls['lastname'].value;
  let fullName = firstName + ' ' + lastName;
  console.log('fullName-->' , fullName );

  this.formValidation();
  this.postData();
            }

resetForm(){
  this.registerForm.reset();
}

//setFormdata(){
 // this.registerForm.controls['firstname'].setValue('saisuwidh');
//}
formValidation(){
  let FormControl = ['firstname','lastname','mobilenumber','email','address'];
  FormControl.forEach((val:any) =>{
   let value = this.registerForm.controls[val].value;
   if(value=== ""){
     this.registerForm.controls[val].markAsTouched();
     this.registerForm.controls[val].markAsDirty();
     this.registerForm.controls[val].setErrors({required:true});

   }

  });
  
}

postData(){
let reqBody ={
  
  'first_name': this.registerForm.controls['firstname'].value,
  'last_name': this.registerForm.controls['lastname'].value,
  'mobile': this.registerForm.controls['mobilenumber'].value,
  'email_address': this.registerForm.controls['email'].value,
  'user_password':this.registerForm.controls['address'].value,
 
};
this.ls.postData(reqBody).subscribe((res:any)=>{
  console.log('api response--->',res);
if(res){
  this.route.navigate(['/home']);
}



});
}
 
}

