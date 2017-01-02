import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mine-count',
  templateUrl: './mine-count.component.html',
  styleUrls: ['./mine-count.component.css']
})
export class MineCountComponent implements OnInit {
  count : Number;

  constructor() {
    this.count = 8;
   }

  ngOnInit() {
  }

}
