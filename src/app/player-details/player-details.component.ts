import { Player } from '../player';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  @Input() player: Player;
  constructor() { }

  ngOnInit() {
  }

}
