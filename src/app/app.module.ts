import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import {HomeService} from './home.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserModule } from './user/user.module';
import { LandingComponent } from './landing/landing.component';
import { AlertComponent } from './alert/alert.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorInterceptor } from './auth/token-intercepor.interceptor';
import { ErrorDialogComponent } from './error-dialog/errordialog/errordialog.component';
import { ErrorDialogService } from './error-dialog/errordialog.service';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthGuard } from './auth/auth.guard';
import {UserdataService} from './user/userdata.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    AlertComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatMenuModule,
    CommonModule,
    UserModule,
    HttpClientModule,
    MatDialogModule
  ],
  exports:[
    CommonModule,
    MatSliderModule,
  ],
  providers: [HomeService,ErrorDialogService,AuthGuard,UserdataService,{
    provide:HTTP_INTERCEPTORS,useClass: TokenInterceptorInterceptor,multi:true
  }],
  bootstrap: [AppComponent],
  entryComponents: [ErrorDialogComponent],
})
export class AppModule { 
  all:any = 20;
  constructor(){
  

  } 
  ngInit(){
    console.log(this.all)
  }

 }
