import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AppareilService } from '../services/appareil.service'

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  Appareils: any []
  appareilsSubscription: Subscription
  
  constructor(private appareilService: AppareilService) {

  }

  // At the moment the component is created 
  ngOnInit(){
    this.appareilsSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils) => {
        this.Appareils = appareils
      }
    )
    this.appareilService.emitAppareilService()
  }

  ngOnDestroy() {
    this.appareilsSubscription.unsubscribe()
  }

  onOn() {
    this.appareilService.switchOnAll()
    this.appareilService.emitAppareilService()
  }

  onOff() {
    this.appareilService.switchOffAll()
    this.appareilService.emitAppareilService()
  }

}
