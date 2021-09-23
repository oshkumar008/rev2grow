import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { MatSliderModule } from '@angular/material/slider';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { NotificationComponent } from './notification/notification.component';
import { OrderComponent } from './order/order.component';
import { WalletComponent } from './wallet/wallet.component';
//import {UserdataService} from './userdata.service';
import {UserRoutingModule} from './user-routing.module';
import { BreadcrumComponent } from '../breadcrum/breadcrum.component';
import { ChangeFormatPipe } from '../change-format.pipe';
import { MessageboxDirective } from './messagebox.directive';
import {AuthGuard} from './../auth/auth.guard';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    NotificationComponent,
    OrderComponent,
    WalletComponent,
    BreadcrumComponent,
    ChangeFormatPipe,
    MessageboxDirective
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports:[
    BreadcrumComponent,ChangeFormatPipe
  ],
  providers:[
    AuthGuard,
    //UserdataService
  ]
})
export class UserModule { }
