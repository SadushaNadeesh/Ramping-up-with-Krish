import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../_services/back-end.service';

@Component({
  selector: 'app-largest-number',
  templateUrl: './largest-number.component.html',
  styleUrls: ['./largest-number.component.scss']
})
export class LargestNumberComponent implements OnInit {
  form: any = {
    text1: null,
    text2: null
  };

  constructor(private service: BackEndService) { }

  ngOnInit(): void {
    // const array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
    // const element = 3;
    // this.checkLargestNumber(array,element);
  }
  checkLargestNumber(): void {

    const { text, element } = this.form;
    let array: number[] = text.split(",").map((number: any) => +number);
    console.log(array);
    this.service.checkLargestNumber(array, element)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
