import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-replaysubject',
  templateUrl: './replaysubject.component.html',
  styleUrls: ['./replaysubject.component.css']
})
export class ReplaysubjectComponent implements OnInit {

  title = 'RxJS Subjects Demo';
  observer1$: Subscription;
  observer2$: Subscription;
  observer3$: Subscription;
  observer1 :number[]= [];
  observer2 :number[] = [];
  observer3 :number[] = [];
  showObserver1 = false;
  showObserver2 = false;
  showObserver3 = false;
  

  constructor(private appservice: SubjectService) {

  }

  subscribe1() {
    this.appservice.count$.subscribe(
      data => { this.observer1.push(data) ;
      console.log(this.observer1)},
      null,
      () => { this.showObserver1 = true; }
    )
  }
  susbcribe2() {
    this.appservice.count$.subscribe(
      data => { this.observer2.push(data) },
      null,
      () => { this.showObserver2 = true; }
    )
  }
  susbcribe3() {
    this.appservice.count$.subscribe(
      data => { this.observer3.push(data) },
      null,
      () => { this.showObserver3 = true; }
    )
  }

  ngOnInit() {

  }
  ngOnDestroy() {

  }
}
