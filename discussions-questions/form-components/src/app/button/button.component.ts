import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() words:string='';
  result:any = {};
  constructor() { }

  ngOnInit(): void {
    console.log(this.words);
  }

  checkRepeatedLetter(){
    let textWithoutSpace = this.words.replace(/\s+/g,"").trim();
    // let result:any = {};

    for(let str of textWithoutSpace){
      this.result[str] = this.result.hasOwnProperty(str)? this.result[str]+1: 1;

    }
    console.log(this.result);

  }

}
