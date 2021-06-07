import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  title = 'check-vowels-and-sort';
  isVowels = false;
  isReload = false;
  message: string = '';
  result: string[] = [];
  text: string[] = [];
  wordCount: number = 0;
  vowelWords: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  checkParagraph(value: any) {
    let containVowel;
    let uncheckedText = value.paragraph;
    this.text = uncheckedText.split(' ').sort();
    //console.log(this.text);
    for (let word of this.text) {
      containVowel = word.match(/[aeiou]/gi);
      if (containVowel) {
        this.isVowels=true;
        this.result.push(word);
      }
    }
    if (this.result.length > 0) {
      this.wordCount = this.text.length;
      this.vowelWords = this.result.length;
    }

  }

  reloadCurrentPage() {
    window.location.reload();
  }
  onMessageReceived(value: string){
    this.message = value;
    if(this.message==='true'){
      this.isReload=true;
    }
  }

}