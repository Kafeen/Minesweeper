import { Component, OnInit } from '@angular/core';
import { createGame } from './game/game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public game;

  ngOnInit() {
    this.game = createGame();
  }
}
