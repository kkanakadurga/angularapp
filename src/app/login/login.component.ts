import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../signin/login.service';
import {User} from './user'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private readonly service :LoginService,private readonly route:Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            
            
            email: ['', [Validators.required, Validators.pattern("^[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            
           
         
        });
    }

    

/* login user credentials*/

    getUserCredentials(){
let email=this.registerForm.controls.email.value;
let password =this.registerForm.controls.password.value;

        this.service.checkUserCredentials(email,password).subscribe((res:any)=>{
            console.log('res is-->' , res );

           console.log (res.ResponseText);

           if(res.ResponseText ===200){
               this.route.navigate(['/home']);
               

           }
           else{
               alert('invalid credentials');
           }
        })
    }
 /*login delete method */      
deleteUseraccount(){
    let email=this.registerForm.controls.email.value;

    this.service.deleteUser(email).subscribe((res:any)=>{
        console.log('res is -->' , res);
    })

}

    }

