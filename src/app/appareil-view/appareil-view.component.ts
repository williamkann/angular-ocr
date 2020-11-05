import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service'

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  Appareils: any []

  constructor(private appareilService: AppareilService) {
  }

  // At the moment the component is created 
  ngOnInit(){
    this.Appareils = this.appareilService.appareils
  }

  onOn() {
    this.appareilService.switchOnAll()
  }

  onOff() {
    this.appareilService.switchOffAll()
  }

}
