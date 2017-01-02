import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Grid } from './game/grid/grid.component';
import { Row } from './game/grid/row/row.component';
import { Tile } from './game/grid/tile/tile.component';
import { PanelComponent } from './panel/panel.component';
import { MineCountComponent } from './mine-count/mine-count.component';
import { GameStatusComponent } from './game-status/game-status.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    Grid,
    Row,
    Tile,
    PanelComponent,
    MineCountComponent,
    GameStatusComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
