import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { RegisterComponent } from './register/register.component';
import {AuthGuard} from './../auth/auth.guard';
import {BeforeauthGuard } from './../auth/beforeauth.guard';
const routes: Routes = [
{path:'login',component:LoginComponent},
{path:'myaccount',canActivate:[AuthGuard] , component:AccountComponent},
{path:'registration',component:RegisterComponent},
{'path':'', redirectTo:'login', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }