import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) { }
  createNewGame(): void {
    console.log('dashboard.component.ts.createNewGame');
    this.router.navigate(['/newGame']);
  }
  ngOnInit() {

  }

}
