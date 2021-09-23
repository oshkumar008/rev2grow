import { ChangeDetectionStrategy, Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from '../home.service';
import { UserdataService } from '../user/userdata.service';
import { User } from '../_model/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
 
  constructor( private mainservice:HomeService, private userdata: UserdataService) {
    
   }
   userlogin : Observable<boolean>;
   LoggedInUser : Observable<User>;
  ngOnInit() {
    this.userlogin = this.userdata.isLoggesIn;
    //this.LoggedInUser = this.userdata.loggedInUser;
  }

  isLoggedIn() {
    return this.userdata.isLogg();
  }

  data = ''; 
  
  outSearchString(){
    this.mainservice.changeString(this.data);
  } 

  logout(){
    this.userdata.logout();
  }

}
