import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MysubjectService {

  counter = 0;
  count$: Observable<any>;
  
  private count: Subject<number>;

  constructor() {

    this.count = new Subject();
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
