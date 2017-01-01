import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})

export class Row implements OnInit {

  @Input() row: any;
  @Output() reveal: EventEmitter<any> = new EventEmitter();
  @Output() flag: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  handleTileClick(tile) {
    console.log('Row '+'handleTileClick ' + tile);
    this.reveal.emit(tile);
  }

  onFlag(tile) { 
    console.log('Row '+'flag ' + tile);
    this.flag.emit(tile);
  }

}
