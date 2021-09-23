import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray,Validators } from "@angular/forms";
import { UserdataService } from '../userdata.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { CustvalidationService } from '../../services/custvalidation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message: string;
  submitted = false;
  page:string = 'Register';
  userForm: any;
  tokenid: any;
  userName: any;
  userImage: any;
  existusername: string;
  errorMessage;
  constructor(public fb:FormBuilder,public userdata : UserdataService,private router: Router) { }

  ngOnInit(): void {
  }
  getPageName(pname){
    console.log(pname)
  }
  registerForm = this.fb.group({
      username: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      mobile: ['', [Validators.required, CustvalidationService.phoneValidator]],
      email: ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['',[Validators.required]],
    
  }) 
  submitUser() {
    
    let body = JSON.stringify({
      username: this.registerForm.controls.username.value,
      fname: this.registerForm.controls.fname.value,
      lname: this.registerForm.controls.lname.value,
      mobile: this.registerForm.controls.mobile.value,
      email: this.registerForm.controls.email.value,
      password: this.registerForm.controls.password.value,
      status:true,
      is_admin:1
    });

    this.userdata.signupform(body).subscribe(
      (res: any) => {
        console.log(res);        
        if(res.code==200){
          let body = JSON.stringify({
            username: this.registerForm.controls.email.value,
            password: this.registerForm.controls.password.value
          });

          this.userdata.loginform(body).subscribe(
            (res: any) => {
              console.log(res);
              if (res) {
                this.tokenid = res.result.token;
                this.userName = res.result.username; 
  //              this.userImage = res.user_image;
                localStorage.setItem('authtoken', this.tokenid);
                localStorage.setItem('currentUsername', this.userName);
               // localStorage.setItem('useravatar', this.userImage);
                this.router.navigate(['/users/myaccount']);
              }
            }, error => {
              console.log("Error");
            }
          )
       
        // if(res){
        //   this.registerForm.reset();   
        //   this.message =  res;        
        //   setTimeout(() => {   
        //     this.router.navigate(['en/user/login']);
        //   }, 10000);
         
        // }
        } else{
          this.errorMessage = res.message;
        }
          
        
      }, error => {
        // console.log("Error");
        this.message = "Email-id already exists";
      }
    )
  }

  checkusername(){    
    let body = JSON.stringify({
      username: this.registerForm.controls.username.value
    });

    this.userdata.existUsername(body).subscribe(
        (res: any) =>{
         // console.log(res.status_code);
          if(res.message){
            this.existusername = "Username already exist, please try a different one."
          } else {
            this.existusername = '';
          }
        }
    );
  }
}
