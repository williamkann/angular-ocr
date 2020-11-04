import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post

  constructor() { }

  ngOnInit(): void {
  }

  getDontLoveIts() {
    if(this.post.loveIts < 0) {
      return true
    }
  }

  addLoveIts() {
    this.post.loveIts++
  }

  removeLoveIts() {
    this.post.loveIts--
  }
}
