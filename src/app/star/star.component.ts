import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() rating = 5;
  @Output() starClick = new EventEmitter(); 
  starWidth : number;
  constructor() { }

  ngOnInit() {
    this.starWidth = this.rating * 75 / 5;
  }

  onStarClick(){
    this.starClick.emit(`you clicked on ${this.rating} event`);
  }

}
