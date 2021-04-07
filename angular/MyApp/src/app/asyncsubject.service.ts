import { Injectable } from '@angular/core';
import { AsyncSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsyncsubjectService {

  counter = 0;
  count$: Observable<any>;
  
   count: AsyncSubject<number>;

  constructor() {

    this.count = new AsyncSubject();


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
