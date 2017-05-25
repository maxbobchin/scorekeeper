import { Score } from './score';
export class Player {
  id: number;
  name: string;
  scores: Score[];
  constructor() {
    this.scores = [];
    this.scores.push(new Score(32));
    this.scores.push(new Score(25));
    this.scores.push(new Score(55));
    this.scores.push(new Score(1));
  }
}
