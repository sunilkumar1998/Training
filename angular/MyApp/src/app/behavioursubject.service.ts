import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehavioursubjectService {

  counter = 0;
  count$: Observable<any>;
  
  count: BehaviorSubject<number>;
 

  constructor() {
    
     this.count = new BehaviorSubject(0);
    
    this.count$ = this.count.asObservable();

    setInterval(() => {
      this.counter = this.counter + 1;
      if (this.counter > 20) {
        this.count.complete();
      }
      this.count.next(this.counter);
    }, 1000)

  }
}
