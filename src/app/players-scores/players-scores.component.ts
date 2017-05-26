import { Player } from '../player';
import { Score } from '../score';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-players-scores',
  templateUrl: './players-scores.component.html',
  styleUrls: ['./players-scores.component.css']
})
export class PlayersScoresComponent implements OnInit {
  @Input() player: Player;
  nextScore = 0;
  total = 0;
  bEdit = false;
  @Output() addNewPlayer: EventEmitter<string> = new EventEmitter();
  @Output() deletePlayer: EventEmitter<string> = new EventEmitter();
  constructor() { }
  addScore(): void {
    this.player.scores.push(new Score(this.nextScore));
    this.calculateTotal();
  }
  calculateTotal(): void {
      this.total = 0;
      for ( const score of this.player.scores){
        this.total += score.num;
      }
      this.nextScore = 0;
  }
  ngOnInit() {
    this.calculateTotal();
  }
  addPlayer(): void {
    console.log("addPlayer");
    this.addNewPlayer.emit('addnewplayer');
  }
  removePlayer(): void {
    console.log("removePlayer");
    this.deletePlayer.emit('' + this.player.id);
  }
  editPlayer(): void {
    console.log("editPlayer");
    this.bEdit = true;
  }
  savePlayer(): void {
    console.log("savePlayer");
    this.bEdit = false;
   }
}
