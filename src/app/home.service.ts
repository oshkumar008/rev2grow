import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  constructor() { }
  changeString(message: string) {
    this.messageSource.next(message);
  }

}
