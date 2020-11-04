import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrls: ['./mon-premier.component.scss']
})
export class MonPremierComponent implements OnInit {
  @Input() titre: string
  @Input() sousTitre: string
  
  constructor() { }


  ngOnInit(): void {
  }

}
