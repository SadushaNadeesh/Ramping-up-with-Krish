import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  title: string = "Fibonacci Series";

  public _inputNumber: number = 0;
  public sumOfFibonacci: number = 0;
  public element: number = 0;
  isNumber = false;

  constructor() { }

  ngOnInit(): void {
  }

  set inputNumber(value: number) {
    if (value > 0) {
      this._inputNumber = value;
      this.fibonacciSeries(value);
    } else {
      this.isNumber = false;
      this.element=0;
    }
  }

  get inputNUmber(): number {
    return this._inputNumber;
  }

  fibonacciSeries(inputNUmber: number) {

    this.isNumber = true;
    let num1 = 0;
    let num2 = 1;
    let sum;
    let totalSum = 0;

    for (let i = 0; i < inputNUmber; i++) {
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;

      this.element = sum;
      totalSum += sum;
      this.sumOfFibonacci = totalSum + 1;
    }
  }
}