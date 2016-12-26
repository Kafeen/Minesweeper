import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class Tile implements OnInit {

  @Input() tile: any;
  @Output() reveal: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('tile = ' + this.tile);
  }

  onClick() {
    console.log('click ' + this.tile);
    //  this.tileClick.next(this.tile);
    this.reveal.emit(this.tile);
  }
}
