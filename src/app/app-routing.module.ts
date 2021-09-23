import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {routarr} from './router-array';
import {AuthGuard} from './auth/auth.guard';
import {BeforeauthGuard} from './auth/beforeauth.guard';
const routes: Routes = routarr;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
