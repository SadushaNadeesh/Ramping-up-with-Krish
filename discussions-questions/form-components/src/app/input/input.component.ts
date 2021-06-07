import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  public _sentence:string='';
  constructor() { }

  ngOnInit(): void {
  }

  set sentence(value: string) {
    this._sentence = value;
  }

  get inputNUmber(): string {
    return this._sentence;
  }

}
