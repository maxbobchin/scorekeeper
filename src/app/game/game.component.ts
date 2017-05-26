import { Game } from '../game';
import { Player } from '../player';
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
  deletePlayer(id): void {
    console.log('deletePlayer');
    console.log(id);
    const newId = id as number;
    const index = this.game.players.findIndex(player => player.id == newId);
    if (index > -1) {
      this.game.players.splice(index, 1);
    }
  }
  addNewPlayer(event): void {
    console.log('addNewPlayer');
    console.log(event);
    const player = new Player();
    player.id = this.game.players.length + 1;
    player.name = 'Player ' + player.id;
    this.game.players.push(player);
  }
  ngOnInit() {
  }

}
