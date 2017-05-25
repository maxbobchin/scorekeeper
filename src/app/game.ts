import {Player} from './player';
export class Game {
  id: number;
  name = 'the game name!';
  players: Player[] = [];
  constructor() {
    const player1 = new Player();
    const player2 = new Player();
    player1.id = 1;
    player1.name = 'player one';
    player2.id = 2;
    player2.name = 'player two';
    this.players.push(player1);
    this.players.push(player2);
  }

  addPlayer(player: Player): void {
    this.players.push(player);
  };
  removePlayer(id: number): void {
    const index = this.players.findIndex(x => x.id === id);
    if (index > -1) {
      this.players.splice(index, 1);
    }
  }
}
