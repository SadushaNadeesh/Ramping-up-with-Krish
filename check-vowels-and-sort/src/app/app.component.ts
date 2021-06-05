import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'check-vowels-and-sort';
  isVowels = false;
  result :string[]= [];
  text: string[]=[];
  wordCount: number=0;
  vowelWords: number=0;
  

  checkParagraph(value: any) {
    let containVowel;
    let uncheckedText = value.paragraph;
    this.text = uncheckedText.split(' ').sort();
    console.log(this.text);
    for (let word of this.text) {
      containVowel = word.match(/[aeiou]/gi);
      if (containVowel) {
        this.result.push(word);
      }
    }
    if(this.result.length>0){
      let removeDUplicates= new Set(this.result);
      this.isVowels = true;
      this.wordCount = this.text.length;
      this.vowelWords = this.result.length
      console.log(removeDUplicates);
    }
    
  }

  reloadCurrentPage() {
    window.location.reload();
   }
}