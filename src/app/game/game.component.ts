import { Game } from '../game';
import { PlayerDetailsComponent } from '../player-details/player-details.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  game: Game;
  constructor() {
    this.game = new Game();
  }

  ngOnInit() {
  }

}
