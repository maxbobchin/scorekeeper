import { Game } from '../game';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  @Output() game: Game;
  constructor(private router: Router) { }
  continueToGame() {
    this.router.navigate(['/game']);
  }
  ngOnInit() {
    this.game = new Game();
  }

}
