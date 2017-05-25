import { Score } from '../score';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  @Input() scores: Score[];
  nextScore = 0;
  total = 0;
  constructor() { }
  addScore(): void {
    this.scores.push(new Score(this.nextScore));
    this.calculateTotal();
  }
  calculateTotal(): void {
      this.total = 0;
      for ( const score of this.scores){
        this.total += score.num;
      }
      this.nextScore = 0;
  }
  ngOnInit() {
    this.calculateTotal();
  }

}
