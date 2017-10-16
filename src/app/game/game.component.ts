import { Component, OnInit, Renderer, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  // @ViewChild('"tref", {read: ElementRe') tref: ElementRef;

  constructor(private render: Renderer, private element:ElementRef) { }

  keyboard = 'abcdefghijklmnopqrstuvwxyz';

  current_word:string = 'esterling';

  dash_words:string;

  chances_remaining = 9;

  list_words = ['happy', 'sad', 'moving', 'country', 'classical', 'humans']


  generateKey(){
    var arr = this.keyboard.split('');
    return arr;
  }

  /**
   * Disable current button and add class to it
   *
   * @param event
   * @param name
   * @method buttonValue
   */
  buttonValue(event, name){
    console.log(event.target);
    this.render.setElementAttribute(event.target, 'disabled', 'disabled')
    this.changeColor(name);
    let arr = this.checkMultipleIndex(name);
    this.updateDashWithWord(arr, name);

  }


  /**
   * Decreasing the chances remaining
   * and generate a new set of game
   * @param name
   */
  decreaseChance(name){
    this.chances_remaining = this.chances_remaining -= 1;
    this.generateNewGame()
  }


  /**
   * Generate a random number from an array of names
   * @param arr
   * @returns {any}
   */
  generateRandomWord(arr){
    const randomWord = arr[Math.floor(Math.random() * arr.length)]
    return randomWord;
  }

  /**
   * Reset values if chances remaining is less than 0
   * Values such as random word, chances remaining and so on
   */
  generateNewGame(){

    if(this.chances_remaining <= 0){
     this.chances_remaining = 9;
     this.current_word = this.generateRandomWord(this.list_words);

     //const button = this.render.createElement(this.element.nativeElement, 'button')
     // this.render.setElementAttribute(button, 'disabled', 'active')


     console.log(this.current_word)
    } else {

    }
  }

  /**
   * Check for multiple index that matches the selected letter
   * Letter are passed as parameter
   * @param name
   * @method CheckIndex
   * @returns {any}
   */
  checkMultipleIndex(name){
    let arr = this.current_word.split('');
    var index = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === name) {
            index.unshift(i);
        }
    }

    if(index.length === 0)
      return null;
    return index;

  }

  /**
   * Replacing current word with ___
   * and update the current_word
   * @method dashingWord
   */
  dashingWord(){
    let word = this.current_word.split('');
    for(let i = 0; i < word.length; i++){
      word[i] = '___';
    }
    this.dash_words = word.join(' ');
  }

  /**
   * Replacing the Dash in the DOM when click fires
   *
   * @param arr
   * @param name
   * @method updateDashWithWord
   */
  updateDashWithWord(arr, name){
    if(arr !== null){
      let word = this.dash_words.split(' ');
      for(let i = 0; i < arr.length; i++){
        word[arr[i]] = name;
      }
      this.dash_words = word.join(' ');
    }
  }

  /**
   * Change button color to green if right letter guessed
   * Change button color to red if wrong letter guessed
   * @param name
   */
  changeColor(name){
    if(this.current_word.includes(name)){
      this.render.setElementClass(event.target, 'isRight', true)
    }
    else{
      this.render.setElementClass(event.target, 'isWrong', true)
      this.decreaseChance(name);
    }
  }

  ngOnInit() {
    console.log(this.element.nativeElement.outerHTML);
    this.dashingWord();

  }

}
