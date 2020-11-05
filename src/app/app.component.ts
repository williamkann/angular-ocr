import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs'
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'mon-projet-test'
  secondes: number
  counterSubscription: Subscription
  constructor() {
    
  }

  ngOnInit() {
    // the observable
    const counter: Observable<number> = interval(2000) 

    this.counterSubscription = counter.subscribe((value) => {
      this.secondes = value
    })
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe()
  }

}
