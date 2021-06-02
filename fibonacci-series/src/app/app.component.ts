import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fibonacci-series';

  private _inputNumber: number = 0;
  sumOfFibonacci: number = 0;
  isNumber = false;

  set inputNumber(value: number) {
    if (value > 0) {
      this.fibonacciSeries(value);
      this._inputNumber = value;
    } else {
      this.isNumber = false;
    }
  }

  get inputNUmber(): number {
    return this._inputNumber;
  }

  fibonacciSeries(value: number) {

    this.isNumber = true;
    let num1 = 0;
    let num2 = 1;
    let sum;
    let totalSum = 0;

    for (let i = 0; i < value; i++) {
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
      totalSum += sum;
      this.sumOfFibonacci = totalSum + 1;
    }
    // this.fibSeries = [0,1,...this.fibSeries];   
  }

}
