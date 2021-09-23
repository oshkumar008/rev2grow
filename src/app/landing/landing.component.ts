import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  searchstr:string;
  subscription: Subscription;

  constructor( private mainservice : HomeService) { }

  
  ngOnInit() {
    this.subscription = this.mainservice.currentMessage.subscribe(message => this.searchstr = message)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
  

