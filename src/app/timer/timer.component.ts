import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  ticks: string = "000";
  constructor() { }

  ngOnInit() {
    let timer = Observable.timer(0,1000);
    timer.subscribe(t=>this.ticks = ("000" + t).slice(-3));
  }
}
