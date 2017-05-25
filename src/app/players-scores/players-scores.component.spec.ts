import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersScoresComponent } from './players-scores.component';

describe('PlayersScoresComponent', () => {
  let component: PlayersScoresComponent;
  let fixture: ComponentFixture<PlayersScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
