import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Grid } from './game/grid/grid.component';
import { Row } from './game/grid/row/row.component';
import { Tile } from './game/grid/tile/tile.component';

@NgModule({
  declarations: [
    AppComponent,
    Grid,
    Row,
    Tile
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
