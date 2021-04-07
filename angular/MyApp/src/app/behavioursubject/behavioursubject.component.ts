import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BehavioursubjectService} from '../behavioursubject.service';

@Component({
  selector: 'app-behavioursubject',
  templateUrl: './behavioursubject.component.html',
  styleUrls: ['./behavioursubject.component.css']
})
export class BehavioursubjectComponent implements OnInit {

  title = 'Behaviour Subject Demo';
  observer1$: Subscription;
  observer2$: Subscription;
  observer3$: Subscription;
  observer1 :number[]= [];
  observer2 :number[] = [];
  observer3 :number[] = [];
  showObserver1 = false;
  showObserver2 = false;
  showObserver3 = false;
  

  constructor(private appservice: BehavioursubjectService) {

  }

  subscribe1() {
    this.appservice.count$.subscribe(
      data => { this.observer1.push(data) },
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
