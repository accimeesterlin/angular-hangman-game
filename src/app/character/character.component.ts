import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  constructor() { }

  links = [
    'https://assets.pokemon.com/assets//cms2/img/play-games/_tiles/alolan_volcanic_panic/alolan-volcanic-panic-169.jpg',
    'https://assets.pokemon.com/assets//cms2/img/video-games/_tiles/pokemon-go/07242017/pokemon-go-169.jpg',
    ''
  ]

  ngOnInit() {
  }

}
