import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Row } from './row/row.component';

@Component({
  selector: 'grid',
  templateUrl: 'grid.component.html',
  styleUrls: ['grid.component.css']
})

export class Grid implements OnInit, OnChanges {
  @Input() game: any;

  rows;

  constructor() { }

  ngOnInit() {
    console.log('game = ' + this.game.toString());

    this.rows = this.game.tiles;
  }

  ngOnChanges(changes) {
    console.log('onChanges ' + changes);
  }

  handleTileClick(tile) {
    console.log('Grid '+'handleTileClick ' + tile.id);

    this.game.reveal(tile);
  }

  onFlag(tile) {
    console.log('Grid '+'flag ' + tile.id);

    this.game.flag(tile);
  }
}
