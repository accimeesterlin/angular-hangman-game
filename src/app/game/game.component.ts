import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  keyboard = 'abcdefghijklmnopqrstuvwxyz';

  generateKey(){
    var arr = this.keyboard.split('');
    console.log(arr);
    return arr;
  }



  ngOnInit() {
  }

}
