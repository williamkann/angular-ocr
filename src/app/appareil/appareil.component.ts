import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string
  @Input() appareilStatus: string
  @Input() indexOfAppareil: number
  @Input() id: number

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus () {
    console.log(this.appareilStatus)
  }

  switchMyAppareilOn() {
    this.appareilService.switchOnAppareil(this.indexOfAppareil)
  }

  switchMyAppareilOff() {
    this.appareilService.switchOffAppareil(this.indexOfAppareil)
  }

}
