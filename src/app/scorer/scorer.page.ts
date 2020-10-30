import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from './player.mode';

@Component({
  selector: 'app-scorer',
  templateUrl: './scorer.page.html',
  styleUrls: ['./scorer.page.scss'],
})
export class ScorerPage implements OnInit {

  players: Player[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const names = JSON.parse(paramMap.get('players')).players;
      names.forEach(playerName => {
        this.players.push(new Player(playerName));
      });
    });
    console.log(this.players);
  }

}
