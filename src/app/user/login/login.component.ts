import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormArray,Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  page:string = 'Log In';
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
  public ErrorMassage: any;
  public headingcolor: string = 'black';
  constructor(public fb:FormBuilder,public userdata : UserdataService,public router:Router,public route:ActivatedRoute ) { }
  arr:any = this.userdata.shwodata();
  submitted = false;
  ngOnInit(): void {
    
  }

  loginForm = this.fb.group({
    
    email: ['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    password: ['',[Validators.required]],
  
  })  

  loginUser() {
    this.submitted = true;
    if(!this.loginForm.valid) {
      this.ErrorMassage ='Please fill all the required fields to Ligin a!';
    } else {

      let body = JSON.stringify({
        username: this.loginForm.controls.email.value,
        password: this.loginForm.controls.password.value
      });
  
      this.userdata.loginform(body).pipe(first(
        
      )).subscribe({
  //       (res: any) => {
  //         console.log(res);
  //         if (res) {
  //           // this.tokenid = res.result.token;
  //           // this.userName = res.result.username; 
  // //              this.userImage = res.user_image;
  //           localStorage.setItem('authtoken', res.result.token);
  //           localStorage.setItem('user',JSON.stringify(res.result));
  //           localStorage.setItem('currentUsername', res.result.username);
  //           this.router.navigate(['/users/myaccount']);
  //         }
  //       }
          next: () => {
            // get return url from query parameters or default to home page
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
            //alert(returnUrl);
            this.router.navigateByUrl('/users/myaccount');
        }
        , error:error => {
          this.ErrorMassage = "No such Email (or) This email is Not Registered";
          console.log("Error" );
          this.headingcolor='red';
        }
      }
      )
    }
    
 
  }

  // Getter method to access formcontrols
  get myForm() {
    return this.loginForm.controls;
  }
  getPageName(pname){
    console.log(pname)
  }
}
