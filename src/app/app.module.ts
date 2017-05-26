import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdButton } from '@angular/material';
import {  } from '@types/hammerjs';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { PlayersScoresComponent } from './players-scores/players-scores.component';
import { ScoresComponent } from './scores/scores.component';
import { ScoreComponent } from './score/score.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { GameComponent } from './game/game.component';
import { GameDetailsComponent } from './game-details/game-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlayersScoresComponent,
    ScoresComponent,
    ScoreComponent,
    PlayerDetailsComponent,
    GameComponent,
    GameDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
